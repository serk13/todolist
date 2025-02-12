import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
import { apiService } from '@/services/apiService'

export interface Todo {
  id: number
  text: string
  completed: boolean
  createdAt: Date
}

const STORAGE_KEY = 'todo-list-storage'

// Hilfsfunktion zum Laden der Todos aus dem LocalStorage
const loadTodosFromStorage = (): Todo[] => {
  const storedTodos = localStorage.getItem(STORAGE_KEY)
  if (!storedTodos) return []
  
  try {
    // Konvertiere die Datums-Strings zurück zu Date-Objekten
    return JSON.parse(storedTodos, (key, value) => {
      if (key === 'createdAt') return new Date(value)
      return value
    })
  } catch (error) {
    console.error('Fehler beim Laden der Todos:', error)
    return []
  }
}

export const useTodoStore = defineStore('todo', () => {
  const todos = ref<Todo[]>(loadTodosFromStorage())
  const filter = ref<'all' | 'active' | 'completed'>('all')
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  // Speichere Todos automatisch bei Änderungen
  watch(
    todos,
    (newTodos) => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newTodos))
      } catch (error) {
        console.error('Fehler beim Speichern der Todos:', error)
      }
    },
    { deep: true }
  )

  const addTodo = (text: string): void => {
    if (!text.trim()) return
    todos.value.push({
      id: Date.now(),
      text: text.trim(),
      completed: false,
      createdAt: new Date()
    })
  }

  const removeTodo = (id: number): void => {
    todos.value = todos.value.filter(todo => todo.id !== id)
  }

  const toggleTodo = (id: number): void => {
    const todo = todos.value.find(todo => todo.id === id)
    if (todo) {
      todo.completed = !todo.completed
    }
  }

  const importTodosFromApi = async () => {
    isLoading.value = true
    error.value = null
    
    try {
      const apiTodos = await apiService.importTodosFromApi()
      
      // Konvertiere API-Todos in unser Format
      const newTodos: Todo[] = apiTodos.map(apiTodo => ({
        id: Date.now() + Math.random(), // Generiere eindeutige ID
        text: apiTodo.title,
        completed: apiTodo.completed,
        createdAt: new Date()
      }))

      // Füge die neuen Todos hinzu
      todos.value.push(...newTodos)
    } catch (err) {
      error.value = 'Fehler beim Importieren der Todos'
      console.error(err)
    } finally {
      isLoading.value = false
    }
  }

  const filteredTodos = computed(() => {
    switch (filter.value) {
      case 'active':
        return todos.value.filter(todo => !todo.completed)
      case 'completed':
        return todos.value.filter(todo => todo.completed)
      default:
        return todos.value
    }
  })

  const stats = computed(() => {
    return {
      total: todos.value.length,
      completed: todos.value.filter(todo => todo.completed).length,
      active: todos.value.filter(todo => !todo.completed).length
    }
  })

  return {
    todos,
    filter,
    filteredTodos,
    stats,
    isLoading,
    error,
    addTodo,
    removeTodo,
    toggleTodo,
    importTodosFromApi
  }
}) 