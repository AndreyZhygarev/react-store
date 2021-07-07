import { useContext } from "react";
import { observer } from "mobx-react-lite";

import { MobXStoreContext } from "../../context/mobxStoreContext";

const MobXCounter = observer(() => {
  const mobXCounter = useContext(MobXStoreContext);

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
