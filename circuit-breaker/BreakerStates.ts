// BreakerStates.ts

// declaring an enum and color coding to make it more dev friendly
// we'll define our failure threshold for the "RED" portion or how many times we allow failure before we move to a RED state
// we'll define how many successes we need before moving to a GREEN state, our successThreshold
// once we're in RED state, how much time should we wait before we allow a request to pass through? We'll that our timeout.

export enum BreakerState {
    GREEN = "GREEN",
    RED = "RED",
    YELLOW = "YELLOW"
}