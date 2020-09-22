import { defineComponent, computed } from 'vue-demi';
import { UsersState, UsersAction, User } from '@fixtures//store/users';
import type { DefineComponent } from 'vue-demi';
import type { ReturnValue } from '@/index';

export type UsersComponent = DefineComponent<
void,
void,
void,
{
  users: () => User[]
},
{
  add(): void,
  updateName(): void,
},
any,
any,
any,
any,
any,
any
>;

export const createUsersComponent = ([
  state,
  dispatch,
]: ReturnValue<UsersState, UsersAction>) => {
  return defineComponent({
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

    setup() {
      const users = computed(() => state.users);

      const add = () => {
        dispatch({
          type: 'ADD',
          payload: {
            id: new Date().getTime().toString(),
            name: 'test name',
            email: 'test@example.com',
          }
        })
      }

      const updateName = () => {
        dispatch({
          type: 'UPDATE_USER_NAME',
          payload: {
            index: 0,
            name: 'updated test name',
          },
        });
      }

      return {
        users,
        add,
        updateName,
      }
    },

  });
};
