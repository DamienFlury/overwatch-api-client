export default interface Profile {
  competitiveStats: GameStats;
  endorsement: number;
  endorsementIcon: string;
  gamesWon: number;
  icon: string;
  level: number;
  levelIcon: string;
  name: string;
  prestige: number;
  prestigeIcon: string;
  private: boolean;
  quickPlayStats: GameStats;
  rating: number;
  ratingIcon: string;
  ratings?: RatingsEntity[] | null;
}
export interface GameStats {
  awards: Awards;
  games: Games;
}
export interface Awards {
  cards: number;
  medals: number;
  medalsBronze: number;
  medalsSilver: number;
  medalsGold: number;
}
export interface Games {
  played: number;
  won: number;
}
export interface RatingsEntity {
  level: number;
  role: string;
  roleIcon: string;
  rankIcon: string;
}
