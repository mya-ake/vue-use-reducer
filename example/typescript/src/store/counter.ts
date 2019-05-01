import { useReducer, VueUseReducer } from "vue-use-reducer";
export interface CounterState extends VueUseReducer.State {
  count: number;
}

type ActionTypes = "increment" | "decrement";

export interface CounterAction extends VueUseReducer.Action {
  type: ActionTypes;
}

const initailState: CounterState = {
  count: 0
};

const reducer: VueUseReducer.Reducer<CounterState, CounterAction> = (
  state,
  action
) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1
      };
    case "decrement":
      return {
        ...state,
        count: state.count - 1
      };
  }
};

const [state, dispatch] = useReducer(reducer, initailState);

export const counterState = state;
export const counterDispatch = dispatch;
