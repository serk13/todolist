<template>
  <div class="base-card">
    <div v-if="$slots.header" class="card-header">
      <slot name="header"></slot>
    </div>
    <div class="card-content">
      <slot></slot>
    </div>
    <div v-if="$slots.footer" class="card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * BaseCard Komponente
 * 
 * Eine wiederverwendbare Container-Komponente mit drei Slots:
 * - header: Für den Kopfbereich (optional)
 * - default: Für den Hauptinhalt
 * - footer: Für den Fußbereich (optional)
 * 
 * Die Komponente bietet eine einheitliche Darstellung mit Schatten und Rundungen
 * und passt sich flexibel an den Inhalt an.
 */
</script>

<style scoped>
.base-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
}

.card-header {
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #eee;
}

.card-footer {
  margin-top: 1rem;
  padding-top: 0.5rem;
  border-top: 1px solid #eee;
}
</style> 