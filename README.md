# Todo-Liste

Eine moderne Todo-Listen-Anwendung, entwickelt mit Vue 3 und TypeScript. Die Anwendung nutzt die Composition API und bietet eine benutzerfreundliche Oberfläche zur Verwaltung von Aufgaben.

## Projektbeschreibung

Diese Todo-Liste ist eine Single-Page-Anwendung (SPA), die es Benutzern ermöglicht, ihre täglichen Aufgaben effizient zu verwalten. Die Anwendung wurde als Schulprojekt entwickelt, um moderne Frontend-Technologien und Best Practices zu demonstrieren.

Die Anwendung ist in verschiedene Komponenten aufgeteilt, die jeweils eine spezifische Aufgabe erfüllen:
- **TodoList**: Hauptkomponente, die alle anderen Komponenten zusammenführt
- **TodoInput**: Ermöglicht das Hinzufügen neuer Aufgaben
- **TodoItem**: Zeigt eine einzelne Aufgabe an und ermöglicht Interaktionen
- **TodoFilter**: Bietet Filterfunktionen für die Aufgabenliste
- **TodoStats**: Zeigt Statistiken über den Fortschritt der Aufgaben

Alle Daten werden lokal im Browser gespeichert, sodass die Aufgaben auch nach einem Neustart erhalten bleiben.

## Funktionen

- ✏️ Erstellen neuer Aufgaben
- ✅ Markieren von Aufgaben als erledigt/nicht erledigt
- 🗑️ Löschen von Aufgaben
- 🔍 Filtern nach Status (alle/aktiv/erledigt)
- 📊 Statistik-Übersicht (Gesamt, Erledigt, Aktiv)
- 📱 Responsive Design
- 💾 Automatische Speicherung im LocalStorage
- 🎨 Visuelles Feedback und Animationen
- 🌐 Integration mit einer REST API

## Installation und Konfiguration

### Installation

1. Stelle sicher, dass Node.js installiert ist (Version 16 oder höher)

2. Klone das Repository:
   ```bash
   git clone [repository-url]
   cd todolist
   ```

3. Installiere die Abhängigkeiten:
   ```bash
   npm install
   ```

4. Starte den Entwicklungsserver:
   ```bash
   npm run dev
   ```

5. Öffne die Anwendung im Browser:
   ```
   http://localhost:5173
   ```

### Konfiguration

Die Anwendung kann über verschiedene Dateien konfiguriert werden:

- **package.json**: Enthält alle Abhängigkeiten und Skripte
- **vite.config.ts**: Konfiguration des Vite-Entwicklungsservers
- **tsconfig.json**: TypeScript-Konfiguration
- **src/services/apiService.ts**: Konfiguration der API-Verbindung (Basis-URL)

Um die API-Basis-URL zu ändern, bearbeite die Konstante `API_BASE_URL` in der Datei `src/services/apiService.ts`:

```typescript
const API_BASE_URL = 'https://jsonplaceholder.typicode.com' // Ändere diese URL
```

## Einsatz und Beispiele

### Grundlegende Verwendung

1. **Aufgabe hinzufügen**:
   - Gib den Text der Aufgabe in das Eingabefeld ein
   - Klicke auf "Hinzufügen" oder drücke Enter

2. **Aufgabe als erledigt markieren**:
   - Klicke auf die Checkbox neben der Aufgabe

3. **Aufgabe löschen**:
   - Klicke auf das "✕"-Symbol neben der Aufgabe

4. **Aufgaben filtern**:
   - Klicke auf "Alle", "Aktiv" oder "Erledigt", um die Ansicht zu filtern

### Beispiel für die Verwendung der API-Integration

Die Anwendung bietet die Möglichkeit, Beispiel-Todos von einer externen API zu laden:

1. Klicke auf den "Beispiel-Todos laden"-Button
2. Die Anwendung lädt bis zu 5 Beispiel-Todos von der JSONPlaceholder API
3. Die geladenen Todos werden zur bestehenden Liste hinzugefügt
4. Die Todos werden automatisch im LocalStorage gespeichert

### Beispiel für die Verwendung der Komponenten in eigenen Projekten

Die Komponenten können auch in anderen Projekten wiederverwendet werden:

```vue
<template>
  <div>
    <h1>Meine Aufgabenliste</h1>
    <TodoInput 
      placeholder="Neue Aufgabe..."
      buttonText="Hinzufügen"
      errorMessage="Bitte Text eingeben"
    />
    <TodoFilter :isVertical="true" activeColor="#FF5722" />
    <div>
      <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
    </div>
  </div>
</template>
```

## Technologien

- Vue 3 mit Composition API
- TypeScript
- Pinia für State Management
- Vite als Build-Tool
- LocalStorage für Datenpersistenz
- JSONPlaceholder API für Beispieldaten

## Entwicklungshinweise

- Die Anwendung verwendet durchgehend die Composition API
- Alle Komponenten folgen den Vue.js Best Practices
- TypeScript wird für bessere Typsicherheit eingesetzt
- Komponenten sind modular und wiederverwendbar gestaltet
- Fehlerbehandlung für Benutzereingaben ist implementiert
- Single-Page-Anwendung ohne Router für einfache Struktur

## Build für Produktion

Um die Anwendung für die Produktion zu bauen:

```bash
npm run build
```

Die optimierten Dateien werden im `dist`-Verzeichnis erstellt.

## Lizenz

Dieses Projekt ist unter der MIT-Lizenz veröffentlicht. Siehe die [LICENSE](LICENSE) Datei für Details.

Copyright (c) 2023 [Dein Name/Organisation]

Die Verwendung dieser Software ist für Bildungszwecke ohne Einschränkungen gestattet. Für kommerzielle Nutzung wird eine Erwähnung des ursprünglichen Autors empfohlen.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
