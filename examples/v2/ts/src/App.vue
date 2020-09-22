<template>
  <div id="app">
    <h1>Use Reducer Sample Counter</h1>

    <div>
      <span>{{ count }}</span>
    </div>
    <div>
      <button type="button" @click="increment">+1</button>
      <button type="button" @click="decrement">-1</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { counterState, counterDispatch } from '@/store/counter';

export default Vue.extend({
  name: 'app',

  computed: {
    count(): number {
      return counterState.count;
    },
  },

  methods: {
    increment() {
      counterDispatch({ type: 'increment' });
    },

    decrement() {
      counterDispatch({ type: 'decrement' });
    },
  },
});
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
