<template>
  <div class="todo-filter">
    <button
      v-for="option in filterOptions"
      :key="option.value"
      @click="todoStore.filter = option.value"
      :class="{ active: todoStore.filter === option.value }"
      :aria-label="'Filtere nach ' + option.label"
    >
      {{ option.label }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useTodoStore } from '@/stores/todoStore'

const todoStore = useTodoStore()

const filterOptions = [
  { value: 'all', label: 'Alle' },
  { value: 'active', label: 'Aktiv' },
  { value: 'completed', label: 'Erledigt' }
] as const
</script>

<style scoped>
.todo-filter {
  display: flex;
  gap: 0.5rem;
  margin: 1rem 0;
}

button {
  padding: 0.5rem 1rem;
  border: 1px solid #ddd;
  background: white;
  border-radius: 4px;
  cursor: pointer;
}

button.active {
  background-color: #4CAF50;
  color: white;
  border-color: #4CAF50;
}

button:not(.active):hover {
  background-color: #f5f5f5;
}
</style> 