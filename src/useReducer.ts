import Vue from 'vue';
import cloneDeepWith from 'lodash.clonedeepwith';
import { VueUseReducer } from './type';

export function useReducer<
  S extends VueUseReducer.State,
  A extends VueUseReducer.Action
>(
  reducer: VueUseReducer.Reducer<S, A>,
  initialState: S,
  initialAction?: A,
): [S, VueUseReducer.Dispatch<A>] {
  const state: S = Vue.observable(initialState);
  const dispatch: VueUseReducer.Dispatch<A> = action => {
    const newState = reducer(cloneDeepWith(state), action);
    Object.entries(newState).forEach(([key, value]: [string, unknown]) => {
      state[key] = value;
    });
  };

  if (initialAction != null) {
    dispatch(initialAction);
  }
  return [state, dispatch];
}
