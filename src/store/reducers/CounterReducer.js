import { DECREMENT, INCREMENT, RESET } from "../actions/CounterAction";

const initialState = {
  id: 123,
  userName: "Naeem",
  count: 0,
};

export default function CounterReducer(state = initialState, action) {
  let count = state.count;
  switch (action.type) {
    case INCREMENT: {
      count = count + 1;

      return {
        ...state,
        count,
      };
    }
    case DECREMENT: {
      if (count > 0) {
        count = count - 1;
      } else {
        count = count;
      }
      return {
        ...state,
        count,
      };
    }
    case RESET: {
      return {
        count: 0,
      };
    }
    default:
      return state;
  }
}
