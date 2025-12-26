const baseUrl = process.env.API_BASE_URL || "http://localhost:8000";

export async function getTeamStats(team: string, season: number) {
  const res = await fetch(`${baseUrl}/api/v1/team-data/${team}/${season}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch team stats: ${res.status}`);
  }
  return res.json();
}

export async function getAllTeams() {
  const res = await fetch(`${baseUrl}/api/v1/team-data/all-teams`);
  if (!res.ok) {
    throw new Error(`Failed to fetch all teams: ${res.status}`);
  }
  return res.json();
}
