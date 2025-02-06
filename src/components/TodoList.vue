<template>
  <div class="todo-list">
    <h1>Aufgabenliste</h1>
    
    <TodoInput 
      placeholder="Neue Aufgabe hinzufügen..."
      buttonText="Hinzufügen"
      errorMessage="Bitte geben Sie einen Text für die Aufgabe ein."
    />
    <TodoFilter 
      :isVertical="false"
      activeColor="#4CAF50"
    />
    
    <div class="todos" role="list">
      <TransitionGroup name="list">
        <TodoItem
          v-for="todo in todoStore.filteredTodos"
          :key="todo.id"
          :todo="todo"
          role="listitem"
        />
      </TransitionGroup>
    </div>

    <TodoStats v-if="todoStore.stats.total > 0" />
  </div>
</template>

<script setup lang="ts">
import { useTodoStore } from '@/stores/todoStore'
import TodoInput from './TodoInput.vue'
import TodoItem from './TodoItem.vue'
import TodoFilter from './TodoFilter.vue'
import TodoStats from './TodoStats.vue'

const todoStore = useTodoStore()
</script>

<style scoped>
.todo-list {
  max-width: 600px;
  margin: 2rem auto;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 2rem;
}

.todos {
  min-height: 100px;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style> 