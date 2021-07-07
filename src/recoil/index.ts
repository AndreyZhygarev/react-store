import { atom, selector } from "recoil";

interface RootState {
  counter: number;
}

export const recoilCounterState = atom<RootState>({
  key: "recoilCounterState",
  default: {
    counter: 0,
  },
});

export const selectCounterState = selector({
  key: "selectCounterState",
  get: ({ get }) => get(recoilCounterState),
});
