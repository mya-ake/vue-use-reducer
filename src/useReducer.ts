import Vue from 'vue';
import { Action, Dispatch, Reducer } from './type';

export function useReducer<S, A extends Action>(
  reducer: Reducer<S, A>,
  initialState: S,
  initialAction?: A,
): [S, Dispatch<A>] {
  const state: S = Vue.observable(initialState);
  const dispatch: Dispatch<A> = action => {
    reducer(state, action);
  };

  if (initialAction != null) {
    dispatch(initialAction);
  }
  return [state, dispatch];
}
