import { Sandbox } from "@vercel/sandbox";

const PORT = 5173;

async function isUp(url: string) {
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(3000) });
    return res.ok;
  } catch {
    return false;
  }
}

async function ensureDevServer(sandbox: Sandbox) {
  const url = sandbox.domain(PORT);
  if (await isUp(url)) return;

  console.log("Dev server not running, starting Vite...");
  await sandbox.runCommand({ cmd: "npm", args: ["run", "dev"], detached: true });

  for (let i = 0; i < 30; i++) {
    if (await isUp(url)) return;
    await new Promise((r) => setTimeout(r, 1000));
  }
  throw new Error("Vite did not start in 30s");
}

async function main() {
  const name = process.argv[2];
  const sandbox = await Sandbox.get({ name }); // resumes if stopped

  await sandbox.writeFiles([
    {
      path: "src/App.jsx",
      content: Buffer.from(`export default function App() {
  return (
    <div className="min-h-screen grid place-items-center bg-zinc-950">
      <div className="rounded-2xl border border-zinc-800 p-8 text-center">
        <h1 className="text-3xl font-semibold text-white">Updated live ⚡</h1>
        <p className="mt-2 text-zinc-400">Written at ${new Date().toLocaleTimeString()}</p>
      </div>
    </div>
  );
}`),
    },
  ]);

  await ensureDevServer(sandbox);
  console.log(`App.jsx updated → ${sandbox.domain(PORT)}`);
}

main().catch(console.error);