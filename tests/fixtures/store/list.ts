import cloneDeepWith from 'lodash.clonedeepwith';
import { useReducer, VueUseReducer } from '@/index';

export interface ListState extends VueUseReducer.State {
  list: string[];
}

type AddAction = {
  type: 'add';
  payload: {
    text: string;
  };
};

export type ListAction = AddAction;

const initialState: ListState = {
  list: [],
};

const reducer: VueUseReducer.Reducer<ListState, ListAction> = (
  state,
  action,
) => {
  switch (action.type) {
    case 'add': {
      const { payload } = action;
      return {
        ...state,
        list: state.list.concat(payload.text),
      };
    }
  }
};

export const createListStore = () => {
  return useReducer(reducer, cloneDeepWith(initialState));
};
