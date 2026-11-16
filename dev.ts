import { Sandbox } from "@vercel/sandbox";
import { vercelCredentials } from "./vercel-credentials.js";
import { readdir, readFile, watch } from "fs/promises";
import { join } from "path";

const PORT = 5173;
const SANDBOX_NAME = "conjure-dev";
const TIMEOUT_MS = 45 * 60 * 1000; // 45 minutes
const EXTEND_INTERVAL = 10 * 60 * 1000; // 10 minutes

let debounceTimer: NodeJS.Timeout | null = null;

async function getAllFiles(
  dir: string,
  baseDir: string = dir
): Promise<Map<string, string>> {
  const files = new Map<string, string>();
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    const relativePath = fullPath.substring(baseDir.length + 1);

    if (entry.isDirectory()) {
      if (entry.name === "node_modules") continue;
      const subFiles = await getAllFiles(fullPath, baseDir);
      for (const [path, content] of subFiles) {
        files.set(path, content);
      }
    } else {
      const content = await readFile(fullPath, "utf-8");
      files.set(relativePath, content);
    }
  }

  return files;
}

async function isViteRunning(sandbox: Sandbox): Promise<boolean> {
  try {
    const res = await fetch(sandbox.domain(PORT), {
      signal: AbortSignal.timeout(3000),
    });
    return res.ok;
  } catch {
    return false;
  }
}

async function main() {
  const args = process.argv.slice(2);
  const isFresh = args.includes("--fresh");

  // Check for ANTHROPIC_API_KEY
  if (!process.env.ANTHROPIC_API_KEY) {
    console.error("❌ Error: ANTHROPIC_API_KEY is not set in .env");
    console.log("\nAdd it to your .env file:");
    console.log("ANTHROPIC_API_KEY=sk-ant-...");
    process.exit(1);
  }

  let sandbox: Sandbox;

  if (isFresh) {
    console.log("🔄 Fresh start requested, stopping old sandbox...");
    try {
      const oldSandbox = await Sandbox.get({
        ...vercelCredentials(),
        name: SANDBOX_NAME,
      });
      await oldSandbox.stop();
      console.log("✅ Old sandbox stopped");
    } catch {
      // Sandbox doesn't exist, that's fine
    }
  }

  console.log("🚀 Starting dev mode...");

  try {
    sandbox = await Sandbox.getOrCreate({
      ...vercelCredentials(),
      name: SANDBOX_NAME,
      runtime: "node22",
      ports: [PORT],
      timeout: TIMEOUT_MS,
      async onCreate(sb) {
        console.log("📦 First-time setup: installing dependencies...");
        const files = await getAllFiles("sandbox-app");

        await sb.writeFiles(
          Array.from(files.entries()).map(([path, content]) => ({
            path,
            content: Buffer.from(content),
          }))
        );

        const install = await sb.runCommand({
          cmd: "npm",
          args: ["install"],
          stdout: process.stdout,
          stderr: process.stderr,
        });

        if (install.exitCode !== 0) {
          throw new Error("npm install failed");
        }

        console.log("✅ Dependencies installed");
      },
    });
  } catch (error: any) {
    if (error.message?.includes("expired") || error.message?.includes("not found")) {
      console.log("⚠️  Sandbox expired or not found, creating fresh one...");
      sandbox = await Sandbox.create({
        ...vercelCredentials(),
        name: SANDBOX_NAME,
        runtime: "node22",
        ports: [PORT],
        timeout: TIMEOUT_MS,
      });

      console.log("📦 Installing dependencies...");
      const files = await getAllFiles("sandbox-app");

      await sandbox.writeFiles(
        Array.from(files.entries()).map(([path, content]) => ({
          path,
          content: Buffer.from(content),
        }))
      );

      const install = await sandbox.runCommand({
        cmd: "npm",
        args: ["install"],
        stdout: process.stdout,
        stderr: process.stderr,
      });

      if (install.exitCode !== 0) {
        throw new Error("npm install failed");
      }
    } else {
      throw error;
    }
  }

  // Sync files on every run
  console.log("📁 Syncing local files to sandbox...");
  const files = await getAllFiles("sandbox-app");
  await sandbox.writeFiles(
    Array.from(files.entries()).map(([path, content]) => ({
      path,
      content: Buffer.from(content),
    }))
  );

  // Start Vite if not running
  const viteRunning = await isViteRunning(sandbox);
  if (!viteRunning) {
    console.log("▶️  Starting Vite...");
    await sandbox.runCommand({
      cmd: "npm",
      args: ["run", "dev"],
      detached: true,
      env: {
        ANTHROPIC_API_KEY: process.env.ANTHROPIC_API_KEY,
      },
    });

    // Wait for Vite to start
    for (let i = 0; i < 30; i++) {
      if (await isViteRunning(sandbox)) break;
      await new Promise((r) => setTimeout(r, 1000));
    }
  } else {
    console.log("✅ Vite already running");
  }

  console.log(`\n🎨 Conjure UI Builder`);
  console.log(`🌐 ${sandbox.domain(PORT)}`);
  console.log(`\n👀 Watching for changes... (Ctrl+C to stop)\n`);

  // Extend timeout periodically
  const extendInterval = setInterval(async () => {
    try {
      await sandbox.extendTimeout(TIMEOUT_MS);
    } catch (error) {
      console.error("⚠️  Failed to extend sandbox timeout:", error);
    }
  }, EXTEND_INTERVAL);

  // Watch for file changes
  const watcher = watch("sandbox-app", { recursive: true });

  for await (const event of watcher) {
    const filename = event.filename;
    if (!filename || filename.includes("node_modules")) continue;

    // Debounce changes
    if (debounceTimer) clearTimeout(debounceTimer);

    debounceTimer = setTimeout(async () => {
      const fullPath = join("sandbox-app", filename);

      try {
        // Check if file still exists
        const content = await readFile(fullPath, "utf-8");

        await sandbox.writeFiles([
          {
            path: filename,
            content: Buffer.from(content),
          },
        ]);

        console.log(`↻ ${filename}`);

        // Handle special files
        if (filename === "package.json") {
          console.log("📦 package.json changed, reinstalling...");
          await sandbox.runCommand({
            cmd: "npm",
            args: ["install"],
          });
        } else if (filename === "vite.config.js") {
          console.log("🔄 vite.config.js changed, restarting Vite...");
          // Kill Vite
          await sandbox.runCommand({
            cmd: "pkill",
            args: ["-f", "vite"],
          });

          // Restart Vite
          await sandbox.runCommand({
            cmd: "npm",
            args: ["run", "dev"],
            detached: true,
            env: {
              ANTHROPIC_API_KEY: process.env.ANTHROPIC_API_KEY,
            },
          });
        }
      } catch (error: any) {
        if (error.code === "ENOENT") {
          // File was deleted
          try {
            await sandbox.runCommand({
              cmd: "rm",
              args: ["-f", filename],
            });
            console.log(`🗑️  ${filename}`);
          } catch {
            // Ignore errors
          }
        } else {
          console.error(`❌ Error syncing ${filename}:`, error.message);
        }
      }
    }, 150);
  }

  // Cleanup on exit
  process.on("SIGINT", () => {
    clearInterval(extendInterval);
    console.log("\n\n👋 Stopped watching. Sandbox still running.");
    console.log("💡 Run `pnpm dev --fresh` to stop and create a new sandbox");
    process.exit(0);
  });
}

main().catch(console.error);
