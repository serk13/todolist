<template>
  <div class="todo-item" :class="{ completed: todo.completed }">
    <input
      type="checkbox"
      :checked="todo.completed"
      @change="toggleTodo(todo.id)"
      :aria-label="'Markiere Todo als ' + (todo.completed ? 'unvollständig' : 'vollständig')"
    />
    <span class="todo-text">{{ todo.text }}</span>
    <button
      @click="removeTodo(todo.id)"
      class="delete-btn"
      aria-label="Todo löschen"
    >
      ✕
    </button>
  </div>
</template>

<script setup lang="ts">
import { useTodoStore } from '@/stores/todoStore'
import type { Todo } from '@/stores/todoStore'

const props = defineProps<{
  todo: Todo
}>()

const todoStore = useTodoStore()
const { removeTodo, toggleTodo } = todoStore
</script>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  padding: 0.5rem;
  gap: 1rem;
  border-bottom: 1px solid #eee;
}

.todo-text {
  flex: 1;
}

.completed .todo-text {
  text-decoration: line-through;
  color: #888;
}

.delete-btn {
  background: none;
  border: none;
  color: #ff4444;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
}

.delete-btn:hover {
  background-color: #ffeeee;
}
</style> 