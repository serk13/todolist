# Todo-Liste

Eine moderne Todo-Listen-Anwendung, entwickelt mit Vue 3 und TypeScript. Die Anwendung nutzt die Composition API und bietet eine benutzerfreundliche Oberfläche zur Verwaltung von Aufgaben.

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

## Installation

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
