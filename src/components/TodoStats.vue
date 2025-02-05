<template>
  <div class="todo-stats">
    <p>Gesamt: {{ todoStore.stats.total }}</p>
    <p>Erledigt: {{ todoStore.stats.completed }}</p>
    <p>Aktiv: {{ todoStore.stats.active }}</p>
  </div>
</template>

<script setup lang="ts">
import { useTodoStore } from '@/stores/todoStore'

const todoStore = useTodoStore()
</script>

<style scoped>
.todo-stats {
  display: flex;
  gap: 1rem;
  padding: 1rem 0;
  color: #666;
  font-size: 0.9rem;
  border-top: 1px solid #eee;
  margin-top: 1rem;
}

p {
  margin: 0;
}
</style> 