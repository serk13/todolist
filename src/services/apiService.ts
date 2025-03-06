/**
 * Interface für Todo-Objekte aus der externen API
 * Definiert die Struktur der Daten, die von der JSONPlaceholder API zurückgegeben werden
 */
interface ApiTodo {
  userId: number
  id: number
  title: string
  completed: boolean
}

// Basis-URL für die JSONPlaceholder API
const API_BASE_URL = 'https://jsonplaceholder.typicode.com'

/**
 * Service für API-Aufrufe
 * Stellt Methoden für die Kommunikation mit externen APIs bereit
 */
export const apiService = {
  /**
   * Importiert Beispiel-Todos von der JSONPlaceholder API
   * @returns Promise mit einem Array von ApiTodo-Objekten
   * @throws Error wenn der API-Aufruf fehlschlägt
   */
  async importTodosFromApi(): Promise<ApiTodo[]> {
    try {
      // Begrenze die Anzahl der zurückgegebenen Todos auf 5
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