import { TodoDispath } from '@/store/todo';
import { Todo } from '@/types/models';

export const addTodo = (
  dispatch: TodoDispath,
  { content }: { content: string },
) => {
  dispatch({
    type: 'add',
    payload: {
      id: new Date().getTime().toString(),
      content,
    },
  });
};

export const toggleTodo = (dispatch: TodoDispath, todo: Todo) => {
  dispatch({
    type: 'setDone',
    payload: { ...todo, done: !todo.done },
  });
};
