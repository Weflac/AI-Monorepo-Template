<script setup lang="ts">
withDefaults(
  defineProps<{
    variant?: 'primary' | 'secondary';
    disabled?: boolean;
  }>(),
  { variant: 'primary', disabled: false },
);
</script>

<template>
  <button class="base-button" :class="`base-button--${variant}`" :disabled="disabled">
    <slot />
  </button>
</template>

<style scoped>
.base-button {
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid transparent;
  cursor: pointer;
  font-size: 0.875rem;
}
.base-button--primary {
  background: #2563eb;
  color: #fff;
}
.base-button--secondary {
  background: #fff;
  border-color: #d1d5db;
  color: #374151;
}
.base-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
