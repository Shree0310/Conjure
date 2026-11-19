"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function SplitView() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sandboxUrl, setSandboxUrl] = useState<string | null>(null);
  const [previewContent, setPreviewContent] = useState<string>("");
  const [githubRepo, setGithubRepo] = useState("");
  const [sandboxId, setSandboxId] = useState<string | null>(null);
  const [loadingMessage, setLoadingMessage] = useState("Thinking...");

  // GitHub workflow state
  const [isGithubConnected, setIsGithubConnected] = useState(false);
  const [isCommitted, setIsCommitted] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isCommitting, setIsCommitting] = useState(false);
  const [isPushing, setIsPushing] = useState(false);
  const [commitHistory, setCommitHistory] = useState<Array<{
    hash: string;
    message: string;
    timestamp: string;
    repo: string;
  }>>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Debug: Monitor sandboxId changes
  useEffect(() => {
    console.log("🔍 sandboxId state changed:", sandboxId);
  }, [sandboxId]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (!isLoading) return;

    const loadingMessages = [
      "Thinking...",
      "Understanding your request...",
      "Generating code...",
      "Creating project structure...",
      "Building components...",
      "Setting up configuration...",
      "Crafting beautiful design...",
      "Adding final touches...",
      "Almost ready...",
    ];

    let currentIndex = 0;
    setLoadingMessage(loadingMessages[0]);

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % loadingMessages.length;
      setLoadingMessage(loadingMessages[currentIndex]);
    }, 3500); // Change message every 3.5 seconds

    return () => clearInterval(interval);
  }, [isLoading]);


  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: "Unknown error" }));
        throw new Error(errorData.error || `API error: ${response.status}`);
      }

      const data = await response.json();
      console.log("Full API response:", JSON.stringify(data, null, 2));

      const assistantMessage: Message = {
        role: "assistant",
        content: data.message,
      };
      setMessages((prev) => [...prev, assistantMessage]);

      // If response contains a sandbox URL, update the preview
      if (data.sandboxUrl) {
        console.log("Setting sandboxUrl:", data.sandboxUrl);
        setSandboxUrl(data.sandboxUrl);
      }

      // If response contains sandbox ID, store it
      if (data.sandboxId) {
        console.log("✅ Received sandboxId:", data.sandboxId);
        setSandboxId(data.sandboxId);
        console.log("✅ State should now have sandboxId");
      } else {
        console.log("❌ No sandboxId in response");
      }

      // If response contains preview content, update it
      if (data.previewContent) {
        setPreviewContent(data.previewContent);
      }
    } catch (error) {
      console.error("Error:", error);
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `Sorry, I encountered an error: ${errorMessage}\n\nPlease check the browser console for more details.`,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  // Step 1: Connect GitHub
  const handleConnectGithub = async () => {
    if (!githubRepo.trim() || isConnecting) return;

    setIsConnecting(true);

    // Simulate connection validation
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsGithubConnected(true);
    setIsConnecting(false);

    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content: `✅ GitHub connected!\n\nRepository: ${githubRepo}\n\nYou can now commit your changes.`,
      },
    ]);
  };

  // Step 2: Commit changes
  const handleCommit = async () => {
    if (!sandboxId || !isGithubConnected || isCommitting) return;

    setIsCommitting(true);

    try {
      const response = await fetch("/api/git-commit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sandboxId,
          githubRepo: githubRepo.trim(),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: "Unknown error" }));
        throw new Error(errorData.error || `API error: ${response.status}`);
      }

      const data = await response.json();

      setIsCommitted(true);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `✅ Changes committed!\n\nCommit: ${data.commitHash || 'Initial commit'}\n\nYou can now push to GitHub.`,
        },
      ]);
    } catch (error) {
      console.error("Error committing:", error);
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `❌ Failed to commit: ${errorMessage}`,
        },
      ]);
    } finally {
      setIsCommitting(false);
    }
  };

  // Step 3: Push to GitHub
  const handlePush = async () => {
    if (!sandboxId || !isCommitted || isPushing) return;

    setIsPushing(true);

    try {
      const response = await fetch("/api/git-push", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sandboxId,
          githubRepo: githubRepo.trim(),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: "Unknown error" }));
        throw new Error(errorData.error || `API error: ${response.status}`);
      }

      const data = await response.json();

      // Add to commit history
      const newCommit = {
        hash: data.commitHash || 'unknown',
        message: 'Initial commit: AI-generated Astro website',
        timestamp: new Date().toLocaleString(),
        repo: githubRepo,
      };
      setCommitHistory((prev) => [newCommit, ...prev]);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `✅ Successfully pushed to GitHub!\n\nRepository: ${githubRepo}\nCommit: ${data.commitHash || 'Initial commit'}`,
        },
      ]);

      // Reset workflow for next iteration
      setIsGithubConnected(false);
      setIsCommitted(false);
      setGithubRepo("");
    } catch (error) {
      console.error("Error pushing to GitHub:", error);
      const errorMessage = error instanceof Error ? error.message : "Unknown error";
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: `❌ Failed to push to GitHub: ${errorMessage}\n\nMake sure the repository exists and you have access rights.`,
        },
      ]);
    } finally {
      setIsPushing(false);
    }
  };

  return (
    <div className="h-screen flex overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Collapsible Commit History Sidebar */}
      <div className={`${isSidebarOpen ? 'w-64' : 'w-0'} transition-all duration-300 overflow-hidden bg-slate-900/50 backdrop-blur-sm border-r border-slate-700/50`}>
        {isSidebarOpen && (
          <div className="h-full flex flex-col">
            <div className="px-4 py-4 border-b border-slate-700/50">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">Commit History</h3>
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {commitHistory.length === 0 ? (
                <div className="text-center py-8 text-slate-500 text-sm">
                  No commits yet
                </div>
              ) : (
                commitHistory.map((commit, idx) => (
                  <div key={idx} className="bg-slate-800/50 rounded-lg p-3 border border-slate-700/50">
                    <div className="flex items-center gap-2 mb-2">
                      <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs font-mono text-green-400">{commit.hash}</span>
                    </div>
                    <p className="text-sm text-slate-300 mb-2">{commit.message}</p>
                    <div className="text-xs text-slate-500 space-y-1">
                      <div>{commit.timestamp}</div>
                      <div className="truncate">{commit.repo}</div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>

      {/* Toggle Sidebar Button (when closed) */}
      {!isSidebarOpen && commitHistory.length > 0 && (
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-slate-800/90 hover:bg-slate-700/90 text-white p-2 rounded-r-lg border border-l-0 border-slate-700/50 transition-colors z-10"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Left Panel - Chat */}
      <div className="w-1/2 flex flex-col border-r border-slate-800/50 backdrop-blur-xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900/80 to-slate-800/80 backdrop-blur-sm px-8 py-6 border-b border-slate-700/50 shadow-lg">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse shadow-lg shadow-emerald-500/50"></div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
              AI Assistant
            </h1>
          </div>
          <p className="text-slate-400 text-sm ml-6 mb-4">Powered by Claude AI</p>

          {/* GitHub Workflow Buttons */}
          <div className="mt-3 space-y-2">
            {/* GitHub URL Input */}
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <svg className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <input
                  type="text"
                  value={githubRepo}
                  onChange={(e) => setGithubRepo(e.target.value)}
                  placeholder="https://TOKEN@github.com/username/repo.git"
                  className="flex-1 bg-slate-800/50 text-white placeholder-slate-500 rounded-md px-2.5 py-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500/50 border border-slate-700/50 backdrop-blur-sm transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={isLoading || isGithubConnected}
                />
              </div>
              <p className="text-[10px] text-slate-500 ml-6">
                Use GitHub Personal Access Token: https://YOUR_TOKEN@github.com/user/repo.git
              </p>
            </div>

            {/* Workflow Buttons */}
            <div className="flex gap-1.5">
              {/* Step 1: Connect */}
              <button
                onClick={handleConnectGithub}
                disabled={isLoading || !sandboxId || !githubRepo.trim() || isGithubConnected || isConnecting}
                className="flex-1 flex items-center justify-center gap-1.5 px-2.5 py-1.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-slate-800/50 disabled:to-slate-800/50 text-white disabled:text-slate-500 rounded-md font-medium text-xs transition-all duration-200 disabled:cursor-not-allowed shadow-md hover:shadow-blue-500/25 disabled:shadow-none border border-blue-500/50 disabled:border-slate-700/30 disabled:opacity-60"
              >
                {isConnecting ? (
                  <>
                    <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Connecting...</span>
                  </>
                ) : isGithubConnected ? (
                  <>
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Connected</span>
                  </>
                ) : (
                  <>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    <span>Connect</span>
                  </>
                )}
              </button>

              {/* Step 2: Commit */}
              <button
                onClick={handleCommit}
                disabled={isLoading || !isGithubConnected || isCommitted || isCommitting}
                className="flex-1 flex items-center justify-center gap-1.5 px-2.5 py-1.5 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 disabled:from-slate-800/50 disabled:to-slate-800/50 text-white disabled:text-slate-500 rounded-md font-medium text-xs transition-all duration-200 disabled:cursor-not-allowed shadow-md hover:shadow-purple-500/25 disabled:shadow-none border border-purple-500/50 disabled:border-slate-700/30 disabled:opacity-60"
              >
                {isCommitting ? (
                  <>
                    <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Committing...</span>
                  </>
                ) : isCommitted ? (
                  <>
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Committed</span>
                  </>
                ) : (
                  <>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span>Commit</span>
                  </>
                )}
              </button>

              {/* Step 3: Push */}
              <button
                onClick={handlePush}
                disabled={isLoading || !isCommitted || isPushing}
                className="flex-1 flex items-center justify-center gap-1.5 px-2.5 py-1.5 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 disabled:from-slate-800/50 disabled:to-slate-800/50 text-white disabled:text-slate-500 rounded-md font-medium text-xs transition-all duration-200 disabled:cursor-not-allowed shadow-md hover:shadow-green-500/25 disabled:shadow-none border border-green-500/50 disabled:border-slate-700/30 disabled:opacity-60"
              >
                {isPushing ? (
                  <>
                    <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Pushing...</span>
                  </>
                ) : (
                  <>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                    </svg>
                    <span>Push</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
          {messages.length === 0 ? (
            <div className="h-full flex items-center justify-center">
              <div className="text-center space-y-6 max-w-md">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"></div>
                  <div className="relative text-7xl">✨</div>
                </div>
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-white">Start a conversation</h2>
                  <p className="text-slate-400">Ask me anything or describe what you'd like to build</p>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-4 py-2 bg-slate-800/50 text-slate-300 rounded-full text-sm border border-slate-700/50">
                    Build a website
                  </span>
                  <span className="px-4 py-2 bg-slate-800/50 text-slate-300 rounded-full text-sm border border-slate-700/50">
                    Create an app
                  </span>
                  <span className="px-4 py-2 bg-slate-800/50 text-slate-300 rounded-full text-sm border border-slate-700/50">
                    Design a UI
                  </span>
                </div>
              </div>
            </div>
          ) : (
            messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} animate-in slide-in-from-bottom-4 duration-300`}
              >
                <div className="flex items-start gap-3 max-w-[85%]">
                  {msg.role === "assistant" && (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <span className="text-white text-sm">AI</span>
                    </div>
                  )}
                  <div
                    className={`rounded-2xl px-5 py-3.5 shadow-lg ${
                      msg.role === "user"
                        ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white border border-blue-500/50"
                        : "bg-slate-800/80 backdrop-blur-sm text-slate-100 border border-slate-700/50"
                    }`}
                  >
                    <p className="whitespace-pre-wrap leading-relaxed">{msg.content}</p>
                  </div>
                  {msg.role === "user" && (
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <span className="text-white text-sm">You</span>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
          {isLoading && (
            <div className="flex justify-start animate-in slide-in-from-bottom-4 duration-300">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-white text-sm">AI</span>
                </div>
                <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl px-5 py-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="flex space-x-2">
                      <div className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-bounce shadow-lg shadow-blue-500/50"></div>
                      <div className="w-2.5 h-2.5 bg-purple-500 rounded-full animate-bounce [animation-delay:0.2s] shadow-lg shadow-purple-500/50"></div>
                      <div className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-bounce [animation-delay:0.4s] shadow-lg shadow-blue-500/50"></div>
                    </div>
                    <span className="text-slate-300 text-sm font-medium animate-pulse">
                      {loadingMessage}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="bg-gradient-to-r from-slate-900/90 to-slate-800/90 backdrop-blur-sm px-6 py-6 border-t border-slate-700/50 shadow-2xl">
          <div className="flex gap-3">
            <div className="flex-1 relative">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Type your message..."
                className="w-full bg-slate-800/50 text-white placeholder-slate-500 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 resize-none border border-slate-700/50 backdrop-blur-sm transition-all duration-200"
                rows={2}
                disabled={isLoading}
              />
            </div>
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-slate-700 disabled:to-slate-800 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-200 disabled:cursor-not-allowed shadow-lg hover:shadow-blue-500/25 disabled:shadow-none self-end border border-blue-500/50 disabled:border-slate-700/50"
            >
              <span className="flex items-center gap-2">
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Sending</span>
                  </>
                ) : (
                  <>
                    <span>Send</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </span>
            </button>
          </div>
          <p className="text-slate-500 text-xs mt-3 flex items-center gap-2">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Press <kbd className="px-1.5 py-0.5 bg-slate-700 text-slate-300 rounded text-xs">Enter</kbd> to send,
            <kbd className="px-1.5 py-0.5 bg-slate-700 text-slate-300 rounded text-xs">Shift</kbd> +
            <kbd className="px-1.5 py-0.5 bg-slate-700 text-slate-300 rounded text-xs">Enter</kbd> for new line
          </p>
        </div>
      </div>

      {/* Right Panel - Sandbox Preview */}
      <div className="w-1/2 flex flex-col bg-white">
        {/* Preview Header */}
        <div className="bg-gradient-to-r from-slate-900/90 to-slate-800/90 backdrop-blur-sm px-8 py-6 border-b border-slate-700/50 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Live Preview
              </h2>
              <p className="text-slate-400 text-sm mt-1">Vercel Sandbox Environment</p>
            </div>
            {sandboxUrl && (
              <a
                href={sandboxUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 rounded-lg transition-colors border border-blue-500/30 group"
              >
                <span className="text-sm font-medium">Open</span>
                <svg className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Preview Content */}
        <div className="flex-1 overflow-hidden relative">
          {sandboxUrl ? (
            <iframe
              src={sandboxUrl}
              className="w-full h-full border-0"
              title="Sandbox Preview"
            />
          ) : previewContent ? (
            <div className="w-full h-full overflow-auto p-6">
              <div dangerouslySetInnerHTML={{ __html: previewContent }} />
            </div>
          ) : (
            <div className="h-full flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
              <div className="text-center space-y-6 max-w-md p-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl"></div>
                  <div className="relative">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-slate-200 to-slate-300 rounded-2xl flex items-center justify-center shadow-lg">
                      <svg className="w-12 h-12 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-slate-800">No Preview Yet</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Start a conversation to create and preview your project in real-time
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
