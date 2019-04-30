import cloneDeepWith from 'lodash.clonedeepwith';
import { useReducer, Reducer, Action } from '@/index';

export type CounterState = {
  count: 0;
};

type ActionTypes = 'increment' | 'decrement';

export interface CounterAction extends Action {
  type: ActionTypes;
}

const initailState: CounterState = {
  count: 0,
};

const reducer: Reducer<CounterState, CounterAction> = (state, action) => {
  switch (action.type) {
    case 'increment':
      state.count++;
      break;
    case 'decrement':
      state.count--;
      break;
  }
};

export const createCounterStore = () => {
  return useReducer(reducer, cloneDeepWith(initailState));
};
