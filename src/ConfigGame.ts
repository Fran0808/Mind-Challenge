export type Difficulty = "slow" | "medium" | "fast";

export const GAME_CONFIG = {
    slow: {
        sequenceStartDelay: 1000,
        squareDisplayDuration: 900,
        nextLevelDelay: 600,
    },
    medium: {
        sequenceStartDelay: 800,
        squareDisplayDuration: 600,
        nextLevelDelay: 400,
    },
    fast: {
        sequenceStartDelay: 600,
        squareDisplayDuration: 300,
        nextLevelDelay: 200,
    },
}