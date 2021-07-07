import { useRecoilValue, useRecoilState } from "recoil";

import { recoilCounterState, selectCounterState } from "../../recoil";

const RecoilCounter = () => {
  const [counter, setCounter] = useRecoilState(recoilCounterState);
  const currentCounter = useRecoilValue(selectCounterState);

  const incrementRecoilCounterHandler = () => {
    setCounter({ counter: currentCounter.counter + 1 });
  };

  const decrementRecoilCounterHandler = () => {
    setCounter({ counter: currentCounter.counter - 1 });
  };

  const resetRecoilCounterHandler = () => {
    setCounter({ counter: 0 });
  };

  return (
    <>
      <h1>Recoil counter</h1>
      <h3>Counter: {counter.counter}</h3>
      <button onClick={incrementRecoilCounterHandler}>+</button>
      <button onClick={decrementRecoilCounterHandler}>-</button>
      <button onClick={resetRecoilCounterHandler}>Reset!</button>
    </>
  );
};

export default RecoilCounter;
