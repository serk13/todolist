<template>
  <div class="todo-filter" :class="{ 'vertical': isVertical }">
    <button
      v-for="option in filterOptions"
      :key="option.value"
      @click="todoStore.filter = option.value"
      :class="{ active: todoStore.filter === option.value }"
      :aria-label="'Filtere nach ' + option.label"
      :style="getButtonStyle(option.value)"
    >
      {{ option.label }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useTodoStore } from '@/stores/todoStore'

/**
 * Props für die TodoFilter-Komponente
 * Ermöglichen die Anpassung der Darstellung und des Verhaltens
 */
const props = defineProps<{
  isVertical?: boolean
  activeColor?: string
}>()

const todoStore = useTodoStore()

/**
 * Definiert die verfügbaren Filter-Optionen
 * Jede Option hat einen Wert und ein Label
 */
const filterOptions = [
  { value: 'all', label: 'Alle' },
  { value: 'active', label: 'Aktiv' },
  { value: 'completed', label: 'Erledigt' }
] as const

/**
 * Computed Property für die dynamischen Styles der Filter-Buttons
 * Gibt eine Funktion zurück, die basierend auf dem aktiven Filter die Styles berechnet
 */
const getButtonStyle = computed(() => (value: typeof filterOptions[number]['value']) => {
  const isActive = value === todoStore.filter
  return {
    backgroundColor: isActive ? (props.activeColor || '#4CAF50') : 'white',
    color: isActive ? 'white' : '#333',
    borderColor: isActive ? (props.activeColor || '#4CAF50') : '#ddd'
  }
})
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
  border: 1px solid;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

button:not(.active):hover {
  background-color: #f5f5f5;
}
</style> 