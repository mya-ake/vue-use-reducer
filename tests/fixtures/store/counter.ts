import { useReducer } from '@/index';
import type { Reducer } from '@/index';

export type CounterState = {
  count: number;
};

type ActionTypes = 'INCREMENT' | 'DECREMENT';

export type CounterAction = {
  type: ActionTypes;
};

const createInitailState = (): CounterState => ({
  count: 0,
});

const reducer: Reducer<CounterState, CounterAction> = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      };
  }
};

export const createCounterStore = () => {
  return useReducer(reducer, createInitailState());
};
