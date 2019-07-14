import Vue, { VueConstructor } from 'vue';
import { VueUseReducer } from '@/index';
import { UsersState, UsersAction, User } from '@fixtures//store/users';

export type UsersComponent = {
  users: readonly User[];
  add(): void;
  updateName(): void;
} & Record<never, any> &
  Vue;

export const createUsersComponent = ([
  state,
  dispatch,
]: VueUseReducer.ReturnValue<UsersState, UsersAction>): VueConstructor<
  UsersComponent
> => {
  return Vue.extend({
    template: `
    <div>
      <ul>
        <li v-for="user in users" :key="user.id">
          <span class="id">{{ user.id }}</span>
          <span class="name">{{ user.name }}</span>
          <span class="email">{{ user.email }}</span>
        </li>
      </ul>
    </div>
    `,

    computed: {
      users() {
        return state.users;
      },
    },

    methods: {
      add() {
        dispatch({
          type: 'ADD',
          payload: {
            id: new Date().getTime().toString(),
            name: 'test name',
            email: 'test@example.com',
          },
        });
      },

      updateName() {
        dispatch({
          type: 'UPDATE_USER_NAME',
          payload: {
            index: 0,
            name: 'updated test name',
          },
        });
      },
    },
  });
};
