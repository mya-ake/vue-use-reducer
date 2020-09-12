import Vue from 'vue';
import { VueUseReducer, DeepReadonly } from './type';

export function useReducer<
  S extends VueUseReducer.State,
  A extends VueUseReducer.Action
>(
  reducer: VueUseReducer.Reducer<S, A>,
  initialState: S,
  initialAction?: A,
): VueUseReducer.ReturnValue<S, A> {
  const state = Vue.observable(initialState);
  const dispatch: VueUseReducer.Dispatch<A> = (action) => {
    const newState = reducer({ ...state }, action);
    Object.keys(newState).forEach((key: keyof S) => {
      state[key] = newState[key];
    });
  };

  if (initialAction != null) {
    dispatch(initialAction);
  }
  return [state as DeepReadonly<S>, dispatch];
}
