import { INCREMENT_COUNTER, DECREMENT_COUNTER, RESET_COUNTER } from "../types";

export const incrementCounter = () => ({
  type: INCREMENT_COUNTER,
});

export const decrementCounter = () => ({
  type: DECREMENT_COUNTER,
});

export const resetCounter = () => ({
  type: RESET_COUNTER,
});
