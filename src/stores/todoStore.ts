import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'
import { apiService } from '@/services/apiService'

/**
 * Interface für Todo-Einträge
 * Definiert die Struktur eines Todo-Elements in der Anwendung
 */
export interface Todo {
  id: number
  text: string
  completed: boolean
  createdAt: Date
}

// Konstante für den LocalStorage-Schlüssel
const STORAGE_KEY = 'todo-list-storage'

/**
 * Hilfsfunktion zum Laden der Todos aus dem LocalStorage
 * Konvertiert die gespeicherten JSON-Daten zurück in Todo-Objekte
 * und stellt sicher, dass das createdAt-Datum korrekt als Date-Objekt geladen wird
 */
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

/**
 * Pinia Store für die Verwaltung der Todo-Liste
 * Verwendet die Composition API für reaktive Daten und Aktionen
 */
export const useTodoStore = defineStore('todo', () => {
  // Reaktive Zustandsvariablen
  const todos = ref<Todo[]>(loadTodosFromStorage())
  const filter = ref<'all' | 'active' | 'completed'>('all')
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  /**
   * Watcher für automatisches Speichern der Todos im LocalStorage
   * Wird bei jeder Änderung der Todos ausgelöst
   */
  watch(
    todos,
    (newTodos) => {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newTodos))
      } catch (error) {
        console.error('Fehler beim Speichern der Todos:', error)
      }
    },
    { deep: true } // Deep-Watching für verschachtelte Änderungen
  )

  /**
   * Fügt ein neues Todo zur Liste hinzu
   * @param text Der Text des neuen Todos
   */
  const addTodo = (text: string): void => {
    if (!text.trim()) return
    todos.value.push({
      id: Date.now(), // Verwende Timestamp als eindeutige ID
      text: text.trim(),
      completed: false,
      createdAt: new Date()
    })
  }

  /**
   * Entfernt ein Todo aus der Liste
   * @param id Die ID des zu löschenden Todos
   */
  const removeTodo = (id: number): void => {
    todos.value = todos.value.filter(todo => todo.id !== id)
  }

  /**
   * Ändert den Status eines Todos (erledigt/nicht erledigt)
   * @param id Die ID des zu ändernden Todos
   */
  const toggleTodo = (id: number): void => {
    const todo = todos.value.find(todo => todo.id === id)
    if (todo) {
      todo.completed = !todo.completed
    }
  }

  /**
   * Importiert Beispiel-Todos von der externen API
   * Setzt Ladezustand und behandelt mögliche Fehler
   */
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

  /**
   * Computed Property für gefilterte Todos basierend auf dem aktuellen Filter
   */
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

  /**
   * Computed Property für Todo-Statistiken
   * Berechnet die Anzahl der Todos nach Status
   */
  const stats = computed(() => {
    return {
      total: todos.value.length,
      completed: todos.value.filter(todo => todo.completed).length,
      active: todos.value.filter(todo => !todo.completed).length
    }
  })

  // Exportiere öffentliche Eigenschaften und Methoden
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