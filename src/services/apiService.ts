interface ApiTodo {
  userId: number
  id: number
  title: string
  completed: boolean
}

const API_BASE_URL = 'https://jsonplaceholder.typicode.com'

export const apiService = {
  async importTodosFromApi(): Promise<ApiTodo[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/todos?_limit=5`)
      if (!response.ok) {
        throw new Error('API-Fehler: Todos konnten nicht geladen werden')
      }
      return await response.json()
    } catch (error) {
      console.error('Fehler beim Laden der Todos:', error)
      throw error
    }
  }
} 