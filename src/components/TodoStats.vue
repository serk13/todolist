<template>
  <div class="todo-stats">
    <div class="stats-numbers">
      <p>Gesamt: {{ todoStore.stats.total }}</p>
      <p>Erledigt: {{ todoStore.stats.completed }}</p>
      <p>Aktiv: {{ todoStore.stats.active }}</p>
    </div>
    <div v-if="todoStore.stats.total > 0" class="progress-info">
      <div class="progress-bar">
        <div 
          class="progress-fill"
          :style="progressStyle"
        ></div>
      </div>
      <p v-if="isCompleted">
        Alle Aufgaben erledigt! 🎉
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useTodoStore } from '@/stores/todoStore'

const todoStore = useTodoStore()

/**
 * Computed Property für die Styles des Fortschrittsbalkens
 * Berechnet die Breite und Farbe basierend auf dem Fortschritt
 */
const progressStyle = computed(() => {
  const percentage = (todoStore.stats.completed / todoStore.stats.total) * 100
  return {
    width: `${percentage}%`,
    backgroundColor: percentage === 100 ? '#4CAF50' : '#2196F3'
  }
})

/**
 * Computed Property für den Abschlussstatus
 * Gibt true zurück, wenn alle Todos erledigt sind
 */
const isCompleted = computed(() => {
  return todoStore.stats.completed === todoStore.stats.total
})
</script>

<style scoped>
.todo-stats {
  padding: 1rem 0;
  color: #666;
  font-size: 0.9rem;
  border-top: 1px solid #eee;
  margin-top: 1rem;
}

.stats-numbers {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.progress-info {
  text-align: center;
}

.progress-bar {
  width: 100%;
  height: 8px;
  background-color: #eee;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 0.5rem;
}

.progress-fill {
  height: 100%;
  transition: all 0.3s ease;
}

p {
  margin: 0;
}
</style> 