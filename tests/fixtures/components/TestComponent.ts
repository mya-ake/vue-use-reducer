import Vue from 'vue';
import { VueUseReducer } from '@/index';
import { CounterState, CounterAction } from '@fixtures/store/counter';

export const createTestComponent = ([state, dispatch]: [
  CounterState,
  VueUseReducer.Dispatch<CounterAction>
]) => {
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
        dispatch({ type: 'increment' });
      },

      decrement() {
        dispatch({ type: 'decrement' });
      },
    },
  });
};
