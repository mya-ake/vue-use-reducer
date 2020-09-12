<template>
  <div>
    <form @submit.prevent="add">
      <div>
        <label for="todo-input">Todo: </label>
        <input id="todo-input" v-model="form.content" type="text" />
      </div>
    </form>

    <div class="inoformation">
      <span>Done task:</span>
      <span>{{ doneCount }}</span>
    </div>

    <ul class="todos">
      <li v-for="todo in todos" :key="todo.id">
        <label>
          <input
            type="checkbox"
            :checked="todo.done"
            @input="toggleDone(todo)"
          />
          <span>{{ todo.content }}</span>
        </label>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { addTodo, toggleTodo } from '@/services/todo';
import { todoState, todoDispatch } from '@/store/todo';
import { Todo } from '@/types/models';

const initializeFormValue = () => ({
  content: '',
});

export default Vue.extend({
  name: 'Home',

  data() {
    return {
      form: initializeFormValue(),
    };
  },

  computed: {
    todos() {
      return todoState.todos;
    },

    doneCount() {
      return todoState.todos.filter(todo => todo.done).length;
    },
  },

  methods: {
    add() {
      const { content } = this.form;
      if (content.length === 0) {
        return;
      }
      addTodo(todoDispatch, { content });
      this.clearForm();
    },

    toggleDone(todo: Todo) {
      toggleTodo(todoDispatch, todo);
    },

    clearForm() {
      this.form = initializeFormValue();
    },
  },
});
</script>

<style scoped>
.todos {
  max-width: 480px;
  margin: 0 auto;
  text-align: left;
}

.inoformation {
  padding: 24px 0;
}
</style>
