import { useReducer } from 'vue-use-reducer';
import type { Reducer } from 'vue-use-reducer'

export type CounterState = {
  count: number;
};

type ActionTypes = 'increment' | 'decrement';

export type CounterAction = {
  type: ActionTypes;
};

const initailState: CounterState = {
  count: 0,
};

const reducer: Reducer<CounterState, CounterAction> = (
  state,
  action,
) => {
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
