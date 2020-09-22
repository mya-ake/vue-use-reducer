import { useReducer } from '@/index';
import type { Reducer } from '@/index';

export type ListState = {
  list: string[];
};

type PushAction = {
  type: 'PUSH';
  payload: {
    text: string;
  };
};

export type ListAction = PushAction | { type: 'POP' };

const createInitialState = (): ListState => ({
  list: [],
});

const reducer: Reducer<ListState, ListAction> = (state, action) => {
  switch (action.type) {
    case 'PUSH': {
      const { payload } = action;
      return {
        ...state,
        list: state.list.concat(payload.text),
      };
    }
    case 'POP':
      return {
        ...state,
        list: state.list.slice(0, -1),
      };
  }
};

export const createListStore = () => {
  return useReducer(reducer, createInitialState());
};
