import { makeAutoObservable } from "mobx";

export default class RootStore {
  counter: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  incrementCounter(): void {
    this.counter += 1;
  }

  decrementCounter(): void {
    this.counter += -1;
  }

  resetCounter(): void {
    this.counter = 0;
  }
}
