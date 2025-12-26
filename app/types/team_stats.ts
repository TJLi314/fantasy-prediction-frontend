export interface Season {
  year: number;
  type: string;
}

export interface Totals {
  points: number;
  pointsPerGame: number;
  touchdowns: number;
  passingTouchdowns: number;
  rushingTouchdowns: number;
  yards: number;
  passingAttempts: number;
  passingCompletions: number;
  passingYards: number;
  rushingAttempts: number;
  rushingYards: number;
}

export interface PassingStats {
  name: string;
  completions: number;
  yards: number;
  passingTouchdowns: number;
}

export interface ReceivingStats {
  name: string;
  targetShare: number;
  receptions: number;
  yards: number;
  receivingTouchdowns: number;
}

export interface RushingStats {
  name: string;
  attempts: number;
  rushingShare: number;
  yards: number;
  ypc: number;
  rushingTouchdowns: number;
}

export interface PlayerStats {
  name: string;
  position: string;
  team: string;

  passingStats?: PassingStats;
  receivingStats?: ReceivingStats;
  rushingStats?: RushingStats;

  totalFantasyPoints: number;
  fantasyPointsPerGame: number;
}

export interface TeamStats {
  id: string;
  isPrediction: boolean;
  name: string;
  season: Season;
  totals: Totals;
  quarterback: PlayerStats;
  receivers: PlayerStats[];
  runningBack: PlayerStats;
  tightEnd: PlayerStats;
}
