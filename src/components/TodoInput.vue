<template>
  <div>
    <form @submit.prevent="handleSubmit" class="todo-input">
      <input
        v-model="newTodoText"
        type="text"
        :placeholder="placeholder"
        :aria-label="'Neue Aufgabe eingeben'"
        @input="showError = false"
        :style="inputStyle"
        :class="{ 'has-error': showError }"
      />
      <button type="submit" :disabled="!newTodoText.trim()">
        {{ buttonText }}
      </button>
    </form>
    <p v-if="showError" class="error-message">
      {{ errorMessage }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useTodoStore } from '@/stores/todoStore'

const props = defineProps<{
  placeholder: string
  buttonText: string
  errorMessage: string
}>()

const todoStore = useTodoStore()
const newTodoText = ref('')
const showError = ref(false)

const inputStyle = computed(() => {
  return {
    borderColor: showError.value ? '#ff4444' : '#ddd',
    backgroundColor: showError.value ? '#fff8f8' : 'white'
  }
})

const handleSubmit = () => {
  if (!newTodoText.value.trim()) {
    showError.value = true
    return
  }
  todoStore.addTodo(newTodoText.value)
  newTodoText.value = ''
  showError.value = false
}
</script>

<style scoped>
.todo-input {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

input {
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: all 0.3s ease;
}

input.has-error {
  outline: none;
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

.error-message {
  color: #ff4444;
  font-size: 0.9rem;
  margin: 0.5rem 0;
}
</style> 