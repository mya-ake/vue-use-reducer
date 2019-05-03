import { useReducer, VueUseReducer } from "vue-use-reducer";
import { Todo } from "@/types/models";

interface TodoState {
  todos: Todo[];
}

type AddAction = {
  type: "add";
  payload: {
    id: string;
    content: string;
  };
};

type SetDoneAction = {
  type: "setDone";
  payload: {
    id: string;
    done: boolean;
  };
};

type TodoAction = AddAction | SetDoneAction;

const initialState: TodoState = {
  todos: []
};

const reducer: VueUseReducer.Reducer<TodoState, TodoAction> = (
  state,
  action
) => {
  switch (action.type) {
    case "add": {
      const { payload } = action;
      return {
        ...state,
        todos: state.todos.concat({ ...payload, done: false })
      };
    }
    case "setDone": {
      const { payload } = action;
      const { id, done } = payload;
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === id ? { ...todo, done } : { ...todo }
        )
      };
    }
  }
};

const [state, dispatch] = useReducer(reducer, initialState);

export type TodoDispath = typeof dispatch;
export const todoState = state;
export const todoDispatch = dispatch;
