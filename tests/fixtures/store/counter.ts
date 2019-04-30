import cloneDeepWith from 'lodash.clonedeepwith';
import { useReducer, VueUseReducer } from '@/index';

export interface CounterState extends VueUseReducer.State {
  count: number;
}

type ActionTypes = 'increment' | 'decrement';

export interface CounterAction extends VueUseReducer.Action {
  type: ActionTypes;
}

const initailState: CounterState = {
  count: 0,
};

const reducer: VueUseReducer.Reducer<CounterState, CounterAction> = (
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

export const createCounterStore = () => {
  return useReducer(reducer, cloneDeepWith(initailState));
};
