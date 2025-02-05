<template>
  <form @submit.prevent="handleSubmit" class="todo-input">
    <input
      v-model="newTodoText"
      type="text"
      placeholder="Neue Aufgabe hinzufügen..."
      :aria-label="'Neue Aufgabe eingeben'"
    />
    <button type="submit" :disabled="!newTodoText.trim()">
      Hinzufügen
    </button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useTodoStore } from '@/stores/todoStore'

const todoStore = useTodoStore()
const newTodoText = ref('')

const handleSubmit = () => {
  todoStore.addTodo(newTodoText.value)
  newTodoText.value = ''
}
</script>

<style scoped>
.todo-input {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

input {
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

button {
  padding: 0.5rem 1rem;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

button:not(:disabled):hover {
  background-color: #45a049;
}
</style> 