import Vue, { VueConstructor } from 'vue';
import { VueUseReducer } from '@/index';
import { ListState, ListAction } from '@fixtures/store/list';

export type ListComponent = {
  list: readonly string[];
  push(text: string): void;
  pop(): void;
} & Record<never, any> &
  Vue;

export const createListComponent = ([
  state,
  dispatch,
]: VueUseReducer.ReturnValue<ListState, ListAction>): VueConstructor<
  ListComponent
> => {
  return Vue.extend({
    template: `
  <div>
    <ul>
      <li v-for="item in list" :key="item">{{ item }}</li>
    </ul>
  </div>
  `,
    computed: {
      list() {
        return state.list;
      },
    },

    methods: {
      push(text: string) {
        dispatch({ type: 'PUSH', payload: { text } });
      },

      pop() {
        dispatch({ type: 'POP' });
      },
    },
  });
};
