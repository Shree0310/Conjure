import { Sandbox } from "@vercel/sandbox";

const PORT = 5173;

// Get API server URL from command line or use localhost
const API_URL = process.argv[2] || "http://localhost:3001";

const files = {
  "package.json": JSON.stringify({
    name: "ui-builder",
    type: "module",
    scripts: { dev: "vite" },
    dependencies: {
      react: "^19.0.0",
      "react-dom": "^19.0.0",
    },
    devDependencies: {
      vite: "^6.0.0",
      "@vitejs/plugin-react": "^4.3.0",
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

const API_URL = "${API_URL}";

export default function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [previewCode, setPreviewCode] = useState(\`
    <div className="h-full flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500">
      <div className="text-white text-center">
        <svg className="w-24 h-24 mx-auto mb-6 opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
        <h1 className="text-5xl font-bold mb-4">AI UI Builder</h1>
        <p className="text-xl opacity-90 mb-2">Describe your UI in the chat to get started</p>
        <p className="text-sm opacity-75">Powered by Claude AI</p>
      </div>
    </div>
  \`);
  const [apiConnected, setApiConnected] = useState(false);
  const messagesEndRef = useRef(null);
  const iframeRef = useRef(null);

  // Check API connection on mount
  useEffect(() => {
    fetch(\`\${API_URL}/api/generate\`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ prompt: 'test' }) })
      .then(() => setApiConnected(true))
      .catch(() => setApiConnected(false));
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Update preview iframe
  useEffect(() => {
    if (iframeRef.current) {
      const doc = iframeRef.current.contentDocument;
      if (doc) {
        doc.open();
        doc.write(\`
          <!DOCTYPE html>
          <html>
            <head>
              <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
            </head>
            <body class="m-0 p-0 h-screen overflow-auto">
              \${previewCode}
            </body>
          </html>
        \`);
        doc.close();
      }
    }
  }, [previewCode]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    const currentInput = input;
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch(\`\${API_URL}/api/generate\`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: currentInput }),
      });

      const data = await response.json();

      if (data.success) {
        const assistantMessage = {
          role: "assistant",
          content: \`✅ I've created your UI! Check the preview on the right.\n\nYou can ask me to modify it or create something else.\`,
        };

        setMessages((prev) => [...prev, assistantMessage]);
        setPreviewCode(data.code);
      } else {
        throw new Error(data.error || 'Failed to generate UI');
      }
    } catch (error) {
      const errorMessage = {
        role: "assistant",
        content: \`❌ Error: \${error.message}\n\nMake sure the API server is running:\nexport ANTHROPIC_API_KEY='your-key'\npnpm server\`,
      };
      setMessages((prev) => [...prev, errorMessage]);
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
    <div className="h-screen flex bg-zinc-950">
      {/* Chat Panel */}
      <div className="w-1/2 border-r border-zinc-800 flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-zinc-800 bg-zinc-900">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">AI UI Builder</h1>
              <p className="text-sm text-zinc-400 mt-1">Describe your UI and watch it build</p>
            </div>
            <div className="flex items-center gap-2">
              <div className={\`w-2 h-2 rounded-full \${apiConnected ? 'bg-green-500' : 'bg-red-500'}\`}></div>
              <span className="text-xs text-zinc-500">{apiConnected ? 'API Connected' : 'API Offline'}</span>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {messages.length === 0 && (
            <div className="h-full flex items-center justify-center text-zinc-500 text-center">
              <div>
                <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
                <p className="text-lg font-semibold mb-2">Start building</p>
                <p className="text-sm mb-4">Try these prompts:</p>
                <div className="space-y-2 text-sm text-left max-w-xs mx-auto">
                  <div className="bg-zinc-900 p-3 rounded-lg border border-zinc-800">
                    "Create a modern pricing card"
                  </div>
                  <div className="bg-zinc-900 p-3 rounded-lg border border-zinc-800">
                    "Build a contact form with validation"
                  </div>
                  <div className="bg-zinc-900 p-3 rounded-lg border border-zinc-800">
                    "Make a hero section with CTA buttons"
                  </div>
                </div>
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
                    : "bg-zinc-800 text-white border border-zinc-700"
                }\`}
              >
                <div className="text-xs opacity-70 mb-1">
                  {msg.role === "user" ? "You" : "Claude"}
                </div>
                <div className="whitespace-pre-wrap break-words">{msg.content}</div>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-zinc-800 text-white border border-zinc-700 rounded-2xl px-4 py-3">
                <div className="text-xs opacity-70 mb-2">Claude</div>
                <div className="flex items-center gap-2">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
                    <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
                    <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
                  </div>
                  <span className="text-sm">Generating UI...</span>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="px-6 py-4 border-t border-zinc-800 bg-zinc-900">
          <div className="flex gap-2">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Describe the UI you want to build..."
              rows={1}
              className="flex-1 bg-zinc-800 text-white placeholder-zinc-500 rounded-xl px-4 py-3 border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 disabled:bg-zinc-800 disabled:text-zinc-600 text-white rounded-xl font-semibold transition-colors"
            >
              Build
            </button>
          </div>
          <p className="text-xs text-zinc-500 mt-2">
            Press Enter to build, Shift+Enter for new line
          </p>
        </div>
      </div>

      {/* Preview Panel */}
      <div className="w-1/2 flex flex-col bg-white">
        <div className="px-6 py-4 border-b border-zinc-200 bg-zinc-50">
          <h2 className="text-lg font-semibold text-zinc-900">Live Preview</h2>
          <p className="text-sm text-zinc-600 mt-1">Your UI renders here in real-time</p>
        </div>
        <div className="flex-1 relative">
          <iframe
            ref={iframeRef}
            className="w-full h-full border-0"
            title="preview"
          />
        </div>
      </div>
    </div>
  );
}`,
};

async function main() {
  console.log("Creating AI-powered UI Builder sandbox...");
  const sandbox = await Sandbox.create({ runtime: "node22", ports: [PORT] });

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

  console.log(`\n✅ AI UI Builder ready!`);
  console.log(`🌐 Open: ${sandbox.domain(PORT)}`);
  console.log(`📦 Sandbox name: ${sandbox.name}`);
  console.log(`🔗 API URL: ${API_URL}`);
  console.log(`\n⚠️  Make sure the API server is running:`);
  console.log(`   export ANTHROPIC_API_KEY='your-key'`);
  console.log(`   pnpm server`);
}

main().catch(console.error);
