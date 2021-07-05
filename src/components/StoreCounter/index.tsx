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

const StoreCounter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state: RootState) => state.counter.counter);

  const incrementStoreCounterHandler = () => {
    dispatch(incrementCounter());
  };

  const decrementStoreCounterHandler = () => {
    dispatch(decrementCounter());
  };

  const resetStoreCounterHandler = () => {
    dispatch(resetCounter());
  };

  return (
    <>
      <h1>Store counter</h1>
      <h3>Counter: {counter}</h3>
      <button onClick={incrementStoreCounterHandler}>+</button>
      <button onClick={decrementStoreCounterHandler}>-</button>
      <button onClick={resetStoreCounterHandler}>Reset!</button>
    </>
  );
};

export default StoreCounter;
