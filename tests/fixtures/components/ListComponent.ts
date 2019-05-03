import Vue from 'vue';
import { VueUseReducer } from '@/index';
import { ListState, ListAction } from '@fixtures/store/list';

export const createListComponent = ([
  state,
  dispatch,
]: VueUseReducer.ReturnValue<ListState, ListAction>) => {
  return Vue.extend({
    template: `
  <div>
    <ul>
      <li v-for="item in list">{{ item }}</li>
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
        dispatch({ type: 'push', payload: { text } });
      },

      pop() {
        dispatch({ type: 'pop' });
      },
    },
  });
};
