export type CardType =
  | "GRANDMA"
  | "OPENER"
  | "BOT"
  | "TIMCHEESE"
  | "JESTER"
  | "LURKER"
  | "SPAMMER"
  | "CORE"
  | "BASICBITCH";

export interface PersonMessageStats {
  sender: string;
  count: number;
}

export interface EmojiStats {
  emoji: string;
  count: number;
}

export interface CoupleStats {
  personOne: string;
  personTwo: string;
  count: number;
}

export interface Card {
  person: string;
  type: CardType;
  value: number;
}

export interface ChatStatistics {
  totalMessages: number;
  messagesPerPerson: PersonMessageStats[];
  top3emojis: EmojiStats[];
  imagesPerPerson: PersonMessageStats[];
  videosPerPerson: PersonMessageStats[];
  AudioPerPerson: PersonMessageStats[];
  stickersPerPerson: PersonMessageStats[];
  totalConversations: number;
  couple: CoupleStats;
}

export interface WrappedData {
  statistics: ChatStatistics;
  cards: Card[];
}
