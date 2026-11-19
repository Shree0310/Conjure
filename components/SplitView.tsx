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
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

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
      const assistantMessage: Message = {
        role: "assistant",
        content: data.message,
      };
      setMessages((prev) => [...prev, assistantMessage]);

      // If response contains a sandbox URL, update the preview
      if (data.sandboxUrl) {
        setSandboxUrl(data.sandboxUrl);
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

  return (
    <div className="h-screen flex overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
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
          <p className="text-slate-400 text-sm ml-6">Powered by Claude AI</p>
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
                  <div className="flex space-x-2">
                    <div className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-bounce shadow-lg shadow-blue-500/50"></div>
                    <div className="w-2.5 h-2.5 bg-purple-500 rounded-full animate-bounce [animation-delay:0.2s] shadow-lg shadow-purple-500/50"></div>
                    <div className="w-2.5 h-2.5 bg-blue-500 rounded-full animate-bounce [animation-delay:0.4s] shadow-lg shadow-blue-500/50"></div>
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
        <div className="bg-gradient-to-r from-slate-900/90 to-slate-800/90 backdrop-blur-sm px-8 py-6 border-b border-slate-700/50 flex items-center justify-between shadow-lg">
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
