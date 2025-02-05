<script setup lang="ts">
import TodoList from './components/TodoList.vue'
</script>

<template>
  <main>
    <TodoList />
  </main>
</template>

<style>
body {
  margin: 0;
  min-height: 100vh;
  background-color: #f5f5f5;
  font-family: Arial, sans-serif;
}

main {
  padding: 1rem;
}

* {
  box-sizing: border-box;
}
</style>
