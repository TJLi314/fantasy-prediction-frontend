import { TeamStats } from "@/app/types/team_stats";
import React from "react";

interface Props {
  teamStats: TeamStats;
}

const PastTeamStats = ({ teamStats }: Props) => {
  console.log(teamStats);
  return <div className="p-5">PastTeamStats</div>;
};

export default PastTeamStats;
