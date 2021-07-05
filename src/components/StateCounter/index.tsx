import { useState } from "react";

const StateCounter = () => {
  const [stateCounter, setStateCounter] = useState<number>(0);

  const incrementCounterHandler = (): void => {
    setStateCounter((currentCounter) => {
      return currentCounter + 1;
    });
  };

  const decrementCounterHandler = (): void => {
    setStateCounter((currentCounter) => {
      return currentCounter - 1;
    });
  };

  const resetCounterHandler = (): void => {
    setStateCounter(0);
  };

  return (
    <>
      <h1>State counter</h1>
      <h3>Counter: {stateCounter}</h3>
      <button onClick={incrementCounterHandler}>+</button>
      <button onClick={decrementCounterHandler}>-</button>
      <button onClick={resetCounterHandler}>Reset!</button>
    </>
  );
};

export default StateCounter;
