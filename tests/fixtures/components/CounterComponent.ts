import { defineComponent, computed } from 'vue-demi';
import { CounterState, CounterAction } from '@fixtures/store/counter';
import type { DefineComponent } from 'vue-demi';
import type { ReturnValue } from '@/index';

export type CounterComponent = DefineComponent<
  void,
  void,
  void,
  { count: () => number },
  {
    increment(): void;
    decrement(): void;
  },
  any,
  any,
  any,
  any,
  any,
  any
>;

export const createCounterComponent = ([state, dispatch]: ReturnValue<
  CounterState,
  CounterAction
>) => {
  return defineComponent({
    template: `
  <div>
    <span id="count">{{ count }}</span>
    <button id="button-increment" type="button" @click="increment">increment</button>
    <button id="button-decrement" type="button" @click="decrement">decrement</button>
  </div>
  `,
    setup() {
      const count = computed(() => state.count);

      const increment = () => {
        dispatch({ type: 'INCREMENT' });
      };
      const decrement = () => {
        dispatch({ type: 'DECREMENT' });
      };

      return {
        count,
        increment,
        decrement,
      };
    },
  });
};
