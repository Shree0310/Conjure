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

    // Push to GitHub (commit should already exist)
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

    console.log("Successfully pushed to GitHub!");

    // Get commit hash
    const hashResult = await sandbox.runCommand({
      cmd: "git",
      args: ["rev-parse", "HEAD"],
    });

    const commitHash = (typeof hashResult.stdout === 'string' ? hashResult.stdout.trim() : String(hashResult.stdout || '').trim()) || "unknown";

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
