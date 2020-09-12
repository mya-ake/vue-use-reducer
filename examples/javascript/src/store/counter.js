import { useReducer } from 'vue-use-reducer';

const initailState = {
  count: 0,
};

const reducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'decrement':
      return {
        ...state,
        count: state.count - 1,
      };
  }
};

const [state, dispatch] = useReducer(reducer, initailState);

export const counterState = state;
export const counterDispatch = dispatch;
