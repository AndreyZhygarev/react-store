import { INCREMENT_COUNTER, DECREMENT_COUNTER, RESET_COUNTER } from "../types";

const initialState = {
  counter: 0,
};

interface IAction {
  type: string;
}

const counterReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case RESET_COUNTER:
      return {
        ...state,
        counter: 0,
      };
    default:
      return state;
  }
};

export default counterReducer;
