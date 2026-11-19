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

    // Add remote origin
    console.log("Adding remote origin...");
    await sandbox.runCommand({
      cmd: "git",
      args: ["remote", "add", "origin", githubRepo],
    });

    // Push to GitHub
    console.log("Pushing to GitHub...");
    const pushResult = await sandbox.runCommand({
      cmd: "git",
      args: ["push", "-u", "origin", "main"],
    });

    if (pushResult.exitCode !== 0) {
      // Try master branch if main fails
      const pushMasterResult = await sandbox.runCommand({
        cmd: "git",
        args: ["push", "-u", "origin", "master"],
      });

      if (pushMasterResult.exitCode !== 0) {
        throw new Error("Failed to push to GitHub. Make sure the repository exists and you have access.");
      }
    }

    // Get commit hash
    const hashResult = await sandbox.runCommand({
      cmd: "git",
      args: ["rev-parse", "HEAD"],
    });

    const commitHash = hashResult.stdout?.trim() || "unknown";

    console.log("Successfully pushed to GitHub!");

    return NextResponse.json({
      success: true,
      commitHash: commitHash.substring(0, 7),
      message: "Successfully pushed to GitHub",
    });
  } catch (error) {
    console.error("Git push error:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json(
      { error: `Failed to push to GitHub: ${errorMessage}` },
      { status: 500 }
    );
  }
}
