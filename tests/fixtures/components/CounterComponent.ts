import Vue, { VueConstructor } from 'vue';
import { VueUseReducer } from '@/index';
import { CounterState, CounterAction } from '@fixtures/store/counter';

export type CounterComponent = {
  count: number;
  increment(): void;
  decrement(): void;
} & Record<never, any> &
  Vue;

export const createCounterComponent = ([
  state,
  dispatch,
]: VueUseReducer.ReturnValue<CounterState, CounterAction>): VueConstructor<
  CounterComponent
> => {
  return Vue.extend({
    template: `
  <div>
    <span id="count">{{ count }}</span>
    <button id="button-increment" type="button" @click="increment">increment</button>
    <button id="button-decrement" type="button" @click="decrement">decrement</button>
  </div>
  `,
    computed: {
      count(): number {
        return state.count;
      },
    },

    methods: {
      increment() {
        dispatch({ type: 'INCREMENT' });
      },

      decrement() {
        dispatch({ type: 'DECREMENT' });
      },
    },
  });
};
