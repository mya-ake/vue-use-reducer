import { reactive, toRaw } from 'vue-demi';
import type {
  State,
  Action,
  Dispatch,
  Reducer,
  ReturnValue,
  DeepReadonly,
} from './type';

export const useReducer = <S extends State, A extends Action>(
  reducer: Reducer<S, A>,
  initialState: S,
  initialAction?: A,
): ReturnValue<S, A> => {
  const state = reactive(initialState);
  const dispatch: Dispatch<A> = (action) => {
    const newState = reducer(toRaw(state) as S, action);
    Object.keys(newState).forEach((key: keyof S) => {
      (state as S)[key] = newState[key];
    });
  };

  if (initialAction != null) {
    dispatch(initialAction);
  }
  return [state as DeepReadonly<S>, dispatch];
};
