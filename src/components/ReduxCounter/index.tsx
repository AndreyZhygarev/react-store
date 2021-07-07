import { useDispatch, useSelector } from "react-redux";

import {
  incrementCounter,
  decrementCounter,
  resetCounter,
} from "../../redux/counter/actions";

interface RootState {
  counter: {
    counter: number;
  };
}

const ReduxCounter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state: RootState) => state.counter.counter);

  const incrementReduxCounterHandler = () => {
    dispatch(incrementCounter());
  };

  const decrementReduxCounterHandler = () => {
    dispatch(decrementCounter());
  };

  const resetReduxCounterHandler = () => {
    dispatch(resetCounter());
  };

  return (
    <>
      <h1>Redux counter</h1>
      <h3>Counter: {counter}</h3>
      <button onClick={incrementReduxCounterHandler}>+</button>
      <button onClick={decrementReduxCounterHandler}>-</button>
      <button onClick={resetReduxCounterHandler}>Reset!</button>
    </>
  );
};

export default ReduxCounter;
