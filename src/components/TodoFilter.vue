<template>
  <div class="todo-filter" :class="{ 'vertical': isVertical }">
    <button
      v-for="option in filterOptions"
      :key="option.value"
      @click="todoStore.filter = option.value"
      :class="{ active: todoStore.filter === option.value }"
      :aria-label="'Filtere nach ' + option.label"
      :style="{ backgroundColor: option.value === todoStore.filter ? activeColor : 'white' }"
    >
      {{ option.label }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { useTodoStore } from '@/stores/todoStore'

const props = defineProps<{
  isVertical?: boolean
  activeColor?: string
}>()

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

.todo-filter.vertical {
  flex-direction: column;
}

button {
  padding: 0.5rem 1rem;
  border: 1px solid #ddd;
  background: white;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

button.active {
  color: white;
  border-color: currentColor;
}

button:not(.active):hover {
  background-color: #f5f5f5;
}
</style> 