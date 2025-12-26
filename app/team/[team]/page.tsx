import { notFound } from "next/navigation";
import React from "react";
import PastTeamStats from "./PastTeamStats";
import StatsForm from "./StatsForm";
import { getAllTeams, getTeamStats } from "@/app/lib/api/teams";

const teamMap = new Map<string, string>([
  ["cardinals", "Arizona Cardinals"],
  ["falcons", "Atlanta Falcons"],
  ["ravens", "Baltimore Ravens"],
  ["bills", "Buffalo Bills"],
  ["panthers", "Carolina Panthers"],
  ["bears", "Chicago Bears"],
  ["bengals", "Cincinnati Bengals"],
  ["browns", "Cleveland Browns"],
  ["cowboys", "Dallas Cowboys"],
  ["broncos", "Denver Broncos"],
  ["lions", "Detroit Lions"],
  ["packers", "Green Bay Packers"],
  ["texans", "Houston Texans"],
  ["colts", "Indianapolis Colts"],
  ["jaguars", "Jacksonville Jaguars"],
  ["chiefs", "Kansas City Chiefs"],
  ["raiders", "Las Vegas Raiders"],
  ["chargers", "Los Angeles Chargers"],
  ["rams", "Los Angeles Rams"],
  ["dolphins", "Miami Dolphins"],
  ["vikings", "Minnesota Vikings"],
  ["patriots", "New England Patriots"],
  ["saints", "New Orleans Saints"],
  ["giants", "New York Giants"],
  ["jets", "New York Jets"],
  ["eagles", "Philadelphia Eagles"],
  ["steelers", "Pittsburgh Steelers"],
  ["49ers", "San Francisco 49ers"],
  ["seahawks", "Seattle Seahawks"],
  ["buccaneers", "Tampa Bay Buccaneers"],
  ["titans", "Tennessee Titans"],
  ["commanders", "Washington Commanders"],
]);

interface Players {
  team: string;
  quarterback: string;
  passCatchers: string[];
  runningBacks: string[];
}

const players: Players = {
  team: "San Francisco 49ers",
  quarterback: "Brock Purdy",
  passCatchers: ["Brandon Aiyuk", "Deebo Samuel", "George Kittle"],
  runningBacks: ["Christian McCaffrey"],
};

interface Props {
  params: Promise<{
    team: string;
  }>;
}

const TeamPredicationPage = async ({ params }: Props) => {
  const { team } = await params;

  const teamData = await getTeamStats(team, 2024);

  if (!teamMap.has(team)) notFound();

  return (
    <>
      <h1 className="p-5 text-3xl font-bold">
        {teamMap.get(team)} Predication Page
      </h1>
      <PastTeamStats teamStats={teamData} />
      <StatsForm players={players} />
    </>
  );
};

export default TeamPredicationPage;
