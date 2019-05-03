import cloneDeepWith from 'lodash.clonedeepwith';
import { useReducer, VueUseReducer } from '@/index';

export interface ListState extends VueUseReducer.State {
  list: string[];
}

type PushAction = {
  type: 'push';
  payload: {
    text: string;
  };
};

export type ListAction = PushAction | { type: 'pop' };

const initialState: ListState = {
  list: [],
};

const reducer: VueUseReducer.Reducer<ListState, ListAction> = (
  state,
  action,
) => {
  switch (action.type) {
    case 'push': {
      const { payload } = action;
      return {
        ...state,
        list: state.list.concat(payload.text),
      };
    }
    case 'pop':
      return {
        ...state,
        list: state.list.slice(0, -1),
      };
  }
};

export const createListStore = () => {
  return useReducer(reducer, cloneDeepWith(initialState));
};
