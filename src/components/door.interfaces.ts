export interface QuoteType {
  id: number;
  film: string;
  author: string;
  quote: string;
}

export interface ObjectWithId {
  id: number;
}

export interface DoorProps {
  door: ObjectWithId;
}
