import { useReducer } from '@/index';
import type { Reducer } from '@/index';

export type User = {
  id: string;
  name: string;
  email: string;
};

export type UsersState = {
  users: User[];
};

type AddAction = {
  type: 'ADD';
  payload: User;
};

type UpdateUserName = {
  type: 'UPDATE_USER_NAME';
  payload: {
    index: number;
    name: string;
  };
};

export type UsersAction = AddAction | UpdateUserName;

const createInitialState = (): UsersState => ({
  users: [],
});

const reducer: Reducer<UsersState, UsersAction> = (state, action) => {
  switch (action.type) {
    case 'ADD': {
      const { payload: user } = action;
      return {
        ...state,
        users: state.users.concat(user),
      };
    }
    case 'UPDATE_USER_NAME': {
      const { index, name } = action.payload;
      return {
        ...state,
        users: state.users.map((user, i) => {
          if (i !== index) {
            return user;
          }
          return {
            ...user,
            name,
          };
        }),
      };
    }
  }
};

export const createUsersStore = () => {
  return useReducer(reducer, createInitialState());
};
