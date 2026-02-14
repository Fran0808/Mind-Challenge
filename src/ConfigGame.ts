export type Difficulty = "slow" | "medium" | "fast";

export const GAME_CONFIG = {
    slow: {
        sequenceStartDelay: 1000,
        squareDisplayDuration: 1000,
        nextLevelDelay: 600,
    },
    medium: {
        sequenceStartDelay: 800,
        squareDisplayDuration: 700,
        nextLevelDelay: 500,
    },
    fast: {
        sequenceStartDelay: 600,
        squareDisplayDuration: 500,
        nextLevelDelay: 400,
    },
}