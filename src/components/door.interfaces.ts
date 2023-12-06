export interface QuoteType {
  id: number;
  film: string;
  author: string;
  quote: string;
}

export interface DoorObject {
  id: number;
}

export interface DoorProps {
  door: DoorObject;
}
