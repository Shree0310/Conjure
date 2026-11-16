import { Sandbox } from "@vercel/sandbox";
import { vercelCredentials } from "./vercel-credentials.js";

const PORT = 5173;

const files = {
  "package.json": JSON.stringify({
    name: "ui-preview",
    type: "module",
    scripts: { dev: "vite" },
    dependencies: { react: "^19.0.0", "react-dom": "^19.0.0" },
    devDependencies: { vite: "^6.0.0", "@vitejs/plugin-react": "^4.3.0" },
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
  "src/App.jsx": `import { useState, useEffect } from "react";

export default function App() {
  const [uiCode, setUiCode] = useState(\`
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500">
      <div className="text-white text-center">
        <svg className="w-24 h-24 mx-auto mb-6 opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
        <h1 className="text-5xl font-bold mb-4">UI Preview</h1>
        <p className="text-xl opacity-90 mb-2">Waiting for UI generation...</p>
        <p className="text-sm opacity-75">Use the local chat interface to build UIs</p>
      </div>
    </div>
  \`);

  // Listen for updates from local chat
  useEffect(() => {
    const handleUpdate = async (e) => {
      if (e.data.type === 'UPDATE_UI' && e.data.code) {
        setUiCode(e.data.code);
      }
    };

    window.addEventListener('message', handleUpdate);

    // Also provide HTTP endpoint for updates
    const checkUpdates = async () => {
      try {
        const res = await fetch('/api/current-ui');
        if (res.ok) {
          const data = await res.json();
          if (data.code) setUiCode(data.code);
        }
      } catch {}
    };

    const interval = setInterval(checkUpdates, 2000);

    return () => {
      window.removeEventListener('message', handleUpdate);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="h-screen" dangerouslySetInnerHTML={{ __html: uiCode }} />
  );
}`,
  "api/current-ui.js": `let currentUI = null;

export default function handler(req, res) {
  if (req.method === 'POST') {
    currentUI = req.body.code;
    res.status(200).json({ success: true });
  } else {
    res.status(200).json({ code: currentUI });
  }
}`,
};

async function main() {
  console.log("Creating UI preview sandbox...");
  const sandbox = await Sandbox.create({ ...vercelCredentials(), runtime: "node22", ports: [PORT] });

  await sandbox.mkDir("src");
  await sandbox.mkDir("api");
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

  console.log(`\n✅ UI Preview Sandbox ready!`);
  console.log(`🌐 Sandbox URL: ${sandbox.domain(PORT)}`);
  console.log(`📦 Sandbox name: ${sandbox.name}`);
  console.log(`\n📝 Next steps:`);
  console.log(`   1. Copy the sandbox URL above`);
  console.log(`   2. Open local-ui-builder.html in your browser`);
  console.log(`   3. Paste the sandbox URL and start building!`);
}

main().catch(console.error);
