import { NextRequest, NextResponse } from "next/server";
import { Sandbox } from "@vercel/sandbox";

export async function POST(request: NextRequest) {
  try {
    const { sandboxId, githubRepo } = await request.json();

    if (!sandboxId || !githubRepo) {
      return NextResponse.json(
        { error: "Missing sandboxId or githubRepo" },
        { status: 400 }
      );
    }

    console.log("Connecting to sandbox:", sandboxId);

    // Connect to the existing sandbox using name (not id)
    const sandbox = await Sandbox.get({
      name: sandboxId,
      token: process.env.VERCEL_TOKEN!,
      teamId: process.env.VERCEL_TEAM_ID!,
      projectId: process.env.VERCEL_PROJECT_ID!,
    });

    console.log("Initializing git repository...");

    // Initialize git if not already initialized
    await sandbox.runCommand({
      cmd: "git",
      args: ["init"],
    });

    // Configure git user (required for commits)
    await sandbox.runCommand({
      cmd: "git",
      args: ["config", "user.email", "ai-builder@example.com"],
    });

    await sandbox.runCommand({
      cmd: "git",
      args: ["config", "user.name", "AI Website Builder"],
    });

    // Add all files
    console.log("Adding files to git...");
    await sandbox.runCommand({
      cmd: "git",
      args: ["add", "."],
    });

    // Create initial commit
    console.log("Creating commit...");
    const commitResult = await sandbox.runCommand({
      cmd: "git",
      args: ["commit", "-m", "Initial commit: AI-generated Astro website"],
    });

    console.log("Commit result:", {
      exitCode: commitResult.exitCode,
      stdout: commitResult.stdout,
      stderr: commitResult.stderr,
    });

    if (commitResult.exitCode !== 0) {
      throw new Error(`Git commit failed: ${commitResult.stderr || 'Unknown error'}`);
    }

    // Add remote origin
    console.log("Adding remote origin...");
    const remoteResult = await sandbox.runCommand({
      cmd: "git",
      args: ["remote", "add", "origin", githubRepo],
    });

    // Ignore error if remote already exists
    if (remoteResult.exitCode !== 0 && !remoteResult.stderr?.includes("already exists")) {
      console.warn("Failed to add remote:", remoteResult.stderr);
    }

    // Get commit hash
    const hashResult = await sandbox.runCommand({
      cmd: "git",
      args: ["rev-parse", "HEAD"],
    });

    const commitHash = (typeof hashResult.stdout === 'string' ? hashResult.stdout.trim() : String(hashResult.stdout || '').trim()) || "unknown";

    console.log("Successfully created commit!");

    return NextResponse.json({
      success: true,
      commitHash: commitHash.substring(0, 7),
      message: "Successfully created commit",
    });
  } catch (error) {
    console.error("Git commit error:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: `Failed to commit: ${errorMessage}` },
      { status: 500 }
    );
  }
}
