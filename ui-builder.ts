import { Sandbox } from "@vercel/sandbox";
import { vercelCredentials } from "./vercel-credentials.js";

const PORT = 5173;

const files = {
  "package.json": JSON.stringify({
    name: "ui-builder",
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
  const [previewCode, setPreviewCode] = useState(\`
    <div className="h-full flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500">
      <div className="text-white text-center">
        <h1 className="text-5xl font-bold mb-4">UI Builder</h1>
        <p className="text-xl opacity-90">Describe your UI in the chat to get started</p>
      </div>
    </div>
  \`);
  const messagesEndRef = useRef(null);
  const iframeRef = useRef(null);

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
    setInput("");
    setIsLoading(true);

    try {
      // TODO: Replace with real API call
      // For now, generate a demo UI based on keywords
      const generatedUI = generateDemoUI(input);

      const assistantMessage = {
        role: "assistant",
        content: \`I've created your UI! Check the preview on the right.\n\nTo connect this to Claude for real AI-generated UIs, set up the API server with your Anthropic API key.\`,
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setPreviewCode(generatedUI);
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
    <div className="h-screen flex bg-zinc-950">
      {/* Chat Panel */}
      <div className="w-1/2 border-r border-zinc-800 flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-zinc-800 bg-zinc-900">
          <h1 className="text-2xl font-bold text-white">AI UI Builder</h1>
          <p className="text-sm text-zinc-400 mt-1">Describe your UI and watch it build</p>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {messages.length === 0 && (
            <div className="h-full flex items-center justify-center text-zinc-500 text-center">
              <div>
                <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                <p className="text-lg">Start building</p>
                <p className="text-sm mt-2">Try: "Create a pricing card" or "Build a login form"</p>
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
                  {msg.role === "user" ? "You" : "AI"}
                </div>
                <div className="whitespace-pre-wrap break-words">{msg.content}</div>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-zinc-800 text-white border border-zinc-700 rounded-2xl px-4 py-3">
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
}

// Demo UI generator (replace with real AI)
function generateDemoUI(prompt) {
  const lower = prompt.toLowerCase();

  if (lower.includes("pricing") || lower.includes("card")) {
    return \`
      <div className="h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full border border-gray-100">
          <div className="text-center">
            <h3 className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">Pro Plan</h3>
            <div className="mt-4 flex items-baseline justify-center">
              <span className="text-6xl font-extrabold text-gray-900">$29</span>
              <span className="ml-2 text-xl text-gray-500">/month</span>
            </div>
          </div>
          <ul className="mt-8 space-y-4">
            <li className="flex items-center">
              <svg className="h-5 w-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span className="text-gray-700">Unlimited projects</span>
            </li>
            <li className="flex items-center">
              <svg className="h-5 w-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span className="text-gray-700">Priority support</span>
            </li>
            <li className="flex items-center">
              <svg className="h-5 w-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span className="text-gray-700">Advanced analytics</span>
            </li>
          </ul>
          <button className="mt-8 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors">
            Get Started
          </button>
        </div>
      </div>
    \`;
  }

  if (lower.includes("login") || lower.includes("form")) {
    return \`
      <div className="h-full flex items-center justify-center bg-gradient-to-br from-purple-50 to-pink-50 p-8">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Welcome Back</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input type="password" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" placeholder="••••••••" />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-purple-600 focus:ring-purple-500" />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <a href="#" className="text-sm text-purple-600 hover:text-purple-700">Forgot password?</a>
            </div>
            <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
              Sign In
            </button>
          </form>
        </div>
      </div>
    \`;
  }

  if (lower.includes("button") || lower.includes("hero")) {
    return \`
      <div className="h-full flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 p-8">
        <div className="text-center text-white max-w-3xl">
          <h1 className="text-6xl font-bold mb-6">Build Amazing UIs</h1>
          <p className="text-xl mb-8 opacity-90">Create beautiful interfaces with AI-powered design</p>
          <div className="flex gap-4 justify-center">
            <button className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors shadow-lg">
              Get Started
            </button>
            <button className="border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    \`;
  }

  // Default
  return \`
    <div className="h-full flex items-center justify-center bg-gradient-to-br from-green-400 to-blue-500 p-8">
      <div className="bg-white rounded-2xl shadow-2xl p-12 max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Custom UI Component</h1>
        <p className="text-lg text-gray-600 mb-6">You asked for: "\${prompt}"</p>
        <p className="text-sm text-gray-500">Connect the Anthropic API to generate custom UIs based on your prompts!</p>
      </div>
    </div>
  \`;
}`,
};

async function main() {
  console.log("Creating UI Builder sandbox...");
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

  console.log(`\n✅ UI Builder ready!`);
  console.log(`🌐 Open: ${sandbox.domain(PORT)}`);
  console.log(`📦 Sandbox name: ${sandbox.name}`);
  console.log(`\n💡 Try prompts like:`);
  console.log(`   - "Create a pricing card"`);
  console.log(`   - "Build a login form"`);
  console.log(`   - "Make a hero section"`);
}

main().catch(console.error);
