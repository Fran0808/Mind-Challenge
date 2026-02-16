export interface SquareInterface {
  index: number;
  isActive: boolean;
  onClick: () => void;
  sound: string | undefined;
  isPlaying: boolean;
}