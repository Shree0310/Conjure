import "dotenv/config";

export function vercelCredentials() {
  const token = process.env.VERCEL_TOKEN;
  const teamId = process.env.VERCEL_TEAM_ID;
  const projectId = process.env.VERCEL_PROJECT_ID;

  const missing: string[] = [];
  if (!token) missing.push("VERCEL_TOKEN");
  if (!teamId) missing.push("VERCEL_TEAM_ID");
  if (!projectId) missing.push("VERCEL_PROJECT_ID");

  if (missing.length > 0) {
    console.error(`❌ Error: missing ${missing.join(", ")} (set them in .env)`);
    process.exit(1);
  }

  return { token, teamId, projectId };
}
