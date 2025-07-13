export interface Card {
  id: number;
  title: string;
  timestamp: string;
  message: string;
  color: 'red' | 'yellow' | 'green';
}