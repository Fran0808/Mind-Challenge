export type Difficulty = "easy" | "medium" | "hard";

export const GAME_CONFIG = {
    easy: {
        sequenceStartDelay: 1000,
        squareDisplayDuration: 1000,
        nextLevelDelay: 600,
    },
    medium: {
        sequenceStartDelay: 800,
        squareDisplayDuration: 700,
        nextLevelDelay: 500,
    },
    hard: {
        sequenceStartDelay: 600,
        squareDisplayDuration: 500,
        nextLevelDelay: 400,
    },
}