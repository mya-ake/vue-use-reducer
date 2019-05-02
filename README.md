# Vue useReducer

[![npm version](https://badge.fury.io/js/vue-use-reducer.svg)](https://badge.fury.io/js/vue-use-reducer)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

 Inspired by useReducer of React Hooks.

## Install

```bash
$ yarn add vue-use-reducer
```

## Usage

Usage is the same as useReducer of React Hooks.

### store

```js
import { useReducer } from "vue-use-reducer";

const initailState = {
  count: 0
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + 1
      };
    case "decrement":
      return {
        ...state,
        count: state.count - 1
      };
  }
};

const [state, dispatch] = useReducer(reducer, initailState);

export const counterState = state;
export const counterDispatch = dispatch;
```

### component

```html
<template>
  <div>
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

<script>
import { counterState, counterDispatch } from "@/store/counter";

export default {
  computed: {
    count() {
      return counterState.count;
    }
  },

  methods: {
    increment() {
      counterDispatch({ type: "increment" });
    },

    decrement() {
      counterDispatch({ type: "decrement" });
    }
  }
};
</script>
```

## Contribution

If you find a bug or want to contribute to the code or documentation, you can help by submitting an [issue](https://github.com/mya-ake/vue-use-reducer/issues) or a [pull request](https://github.com/mya-ake/vue-use-reducer/pulls).

## License

[MIT](https://github.com/mya-ake/vue-use-reducer/blob/master/LICENSE)
