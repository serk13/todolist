<template>
  <BaseCard class="todo-list">
    <template #header>
      <h1>Aufgabenliste</h1>
    </template>

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

    <template #footer>
      <TodoStats v-if="todoStore.stats.total > 0" />
    </template>
  </BaseCard>
</template>

<script setup lang="ts">
import { useTodoStore } from '@/stores/todoStore'
import TodoInput from './TodoInput.vue'
import TodoItem from './TodoItem.vue'
import TodoFilter from './TodoFilter.vue'
import TodoStats from './TodoStats.vue'
import BaseCard from './BaseCard.vue'

const todoStore = useTodoStore()
</script>

<style scoped>
.todo-list {
  max-width: 600px;
  margin: 2rem auto;
}

h1 {
  text-align: center;
  color: #2c3e50;
  margin: 0;
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