import { Sandbox } from "@vercel/sandbox";
import { vercelCredentials } from "./vercel-credentials.js";

const PORT = 5173;

const files = {
  "package.json": JSON.stringify({
    name: "sandbox-chat",
    type: "module",
    scripts: { dev: "vite" },
    dependencies: {
      react: "^19.0.0",
      "react-dom": "^19.0.0",
      "@anthropic-ai/sdk": "^0.32.1"
    },
    devDependencies: {
      vite: "^6.0.0",
      "@vitejs/plugin-react": "^4.3.0"
    },
  }),
  "vite.config.js": `import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  plugins: [react()],
  server: { host: "0.0.0.0", port: ${PORT}, allowedHosts: true },
});`,
  "index.html": `<!doctype html><html><head>
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head><body><div id="root"></div>
<script type="module" src="/src/main.jsx"></script></body></html>`,
  "src/main.jsx": `import { createRoot } from "react-dom/client";
import App from "./App.jsx";
createRoot(document.getElementById("root")).render(<App />);`,
  "src/App.jsx": `import { useState, useRef, useEffect } from "react";

export default function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // In a real implementation, this would call your backend API
      // For demo purposes, we'll simulate a response
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const assistantMessage = {
        role: "assistant",
        content: \`Echo: \${input}\n\nThis is a demo response. To connect to Anthropic's API, you'll need to set up a backend server with your API key.\`,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Error: " + error.message },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl h-[90vh] bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-white/20">
          <h1 className="text-2xl font-bold text-white">Sandbox Agent Chat</h1>
          <p className="text-sm text-white/70 mt-1">Interact with the Anthropic Agent</p>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {messages.length === 0 && (
            <div className="h-full flex items-center justify-center text-white/50 text-center">
              <div>
                <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                <p className="text-lg">Start a conversation</p>
                <p className="text-sm mt-2">Type a message below to begin</p>
              </div>
            </div>
          )}

          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={\`flex \${msg.role === "user" ? "justify-end" : "justify-start"}\`}
            >
              <div
                className={\`max-w-[80%] rounded-2xl px-4 py-3 \${
                  msg.role === "user"
                    ? "bg-indigo-600 text-white"
                    : "bg-white/20 text-white border border-white/30"
                }\`}
              >
                <div className="text-xs opacity-70 mb-1">
                  {msg.role === "user" ? "You" : "Assistant"}
                </div>
                <div className="whitespace-pre-wrap break-words">{msg.content}</div>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white/20 text-white border border-white/30 rounded-2xl px-4 py-3">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                  <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                  <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="px-6 py-4 border-t border-white/20">
          <div className="flex gap-2">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              rows={1}
              className="flex-1 bg-white/10 text-white placeholder-white/50 rounded-xl px-4 py-3 border border-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-white/10 disabled:text-white/30 text-white rounded-xl font-semibold transition-colors"
            >
              Send
            </button>
          </div>
          <p className="text-xs text-white/50 mt-2">
            Press Enter to send, Shift+Enter for new line
          </p>
        </div>
      </div>
    </div>
  );
}`,
};

async function main() {
  console.log("Creating sandbox with chat interface...");
  const sandbox = await Sandbox.create({ ...vercelCredentials(), runtime: "node22", ports: [PORT] });

  await sandbox.mkDir("src");
  await sandbox.writeFiles(
    Object.entries(files).map(([path, content]) => ({
      path,
      content: Buffer.from(content),
    }))
  );

  console.log("Installing deps...");
  const install = await sandbox.runCommand({
    cmd: "npm",
    args: ["install"],
    stdout: process.stdout,
    stderr: process.stderr,
  });
  if (install.exitCode !== 0) throw new Error("npm install failed");

  console.log("Starting Vite...");
  await sandbox.runCommand({ cmd: "npm", args: ["run", "dev"], detached: true });

  console.log(`\n✅ Chat interface ready!`);
  console.log(`🌐 Open: ${sandbox.domain(PORT)}`);
  console.log(`📦 Sandbox name: ${sandbox.name}`);
  console.log(`\nTo connect to Anthropic API, see api-server.ts`);
}

main().catch(console.error);
