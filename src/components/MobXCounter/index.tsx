import { makeAutoObservable } from "mobx";
import { observer } from "mobx-react-lite";

class Counter {
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

const mobXCounter = new Counter();

const MobXCounter = observer(() => {
  const incrementMobXCounterHandler = () => {
    mobXCounter.incrementCounter();
  };

  const decrementMobXCounterHandler = () => {
    mobXCounter.decrementCounter();
  };

  const resetMobXCounterHandler = () => {
    mobXCounter.resetCounter();
  };

  return (
    <>
      <h1>MobX counter</h1>
      <h3>Counter: {mobXCounter.counter}</h3>
      <button onClick={incrementMobXCounterHandler}>+</button>
      <button onClick={decrementMobXCounterHandler}>-</button>
      <button onClick={resetMobXCounterHandler}>Reset!</button>
    </>
  );
});

export default MobXCounter;
