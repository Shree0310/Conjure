import { Sandbox } from "@vercel/sandbox";
import { vercelCredentials } from "./vercel-credentials.js";
import { readdir, readFile } from "fs/promises";
import { join } from "path";

const PORT = 5173;

async function getAllFiles(dir: string, baseDir: string = dir): Promise<Map<string, string>> {
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

async function main() {
  // Check for ANTHROPIC_API_KEY
  if (!process.env.ANTHROPIC_API_KEY) {
    console.error("❌ Error: ANTHROPIC_API_KEY is not set in .env");
    console.log("\nAdd it to your .env file:");
    console.log("ANTHROPIC_API_KEY=sk-ant-...");
    process.exit(1);
  }

  console.log("Creating sandbox...");
  const sandbox = await Sandbox.create({
    ...vercelCredentials(),
    runtime: "node22",
    ports: [PORT],
  });

  console.log("Reading sandbox-app files...");
  const files = await getAllFiles("sandbox-app");

  console.log("Writing files to sandbox...");
  await sandbox.writeFiles(
    Array.from(files.entries()).map(([path, content]) => ({
      path,
      content: Buffer.from(content),
    }))
  );

  console.log("Installing dependencies...");
  const install = await sandbox.runCommand({
    cmd: "npm",
    args: ["install"],
    stdout: process.stdout,
    stderr: process.stderr,
  });

  if (install.exitCode !== 0) {
    throw new Error("npm install failed");
  }

  console.log("Starting Vite...");
  await sandbox.runCommand({
    cmd: "npm",
    args: ["run", "dev"],
    detached: true,
    env: {
      ANTHROPIC_API_KEY: process.env.ANTHROPIC_API_KEY,
    },
  });

  console.log(`\n✅ UI Builder ready!`);
  console.log(`🌐 Open: ${sandbox.domain(PORT)}`);
  console.log(`📦 Sandbox: ${sandbox.name}`);
}

main().catch(console.error);
