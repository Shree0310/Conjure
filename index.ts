import { Sandbox } from "@vercel/sandbox";
import { vercelCredentials } from "./vercel-credentials.js";

const PORT = 5173;

const files = {
  "package.json": JSON.stringify({
    name: "preview",
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
  "src/App.jsx": `export default function App() {
  return <div className="min-h-screen grid place-items-center bg-indigo-600 text-white text-4xl">
    Hello from Vercel Sandbox
  </div>;
}`,
};

async function main() {
  console.log("Creating sandbox...");
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

  console.log(`\nOpen: ${sandbox.domain(PORT)}`);
  console.log(`Sandbox name: ${sandbox.name}`);
}

main().catch(console.error);