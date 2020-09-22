import { defineComponent, computed } from 'vue-demi';
import { ListState, ListAction } from '@fixtures/store/list';
import type { DefineComponent } from 'vue-demi';
import type { ReturnValue } from '@/index';

export type ListComponent = DefineComponent<
  void,
  void,
  void,
  {
    list: () => string[];
  },
  { push(text: string): void; pop(): void },
  any,
  any,
  any,
  any,
  any,
  any
>;

export const createListComponent = ([state, dispatch]: ReturnValue<
  ListState,
  ListAction
>) => {
  return defineComponent({
    template: `
  <div>
    <ul>
      <li v-for="item in list" :key="item">{{ item }}</li>
    </ul>
  </div>
  `,
    setup() {
      const list = computed(() => state.list);

      const push = (text: string) => {
        dispatch({ type: 'PUSH', payload: { text } });
      };
      const pop = () => {
        dispatch({ type: 'POP' });
      };

      return {
        list,
        push,
        pop,
      };
    },
  });
};
