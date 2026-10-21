<script setup lang="ts">
defineProps<{ title?: string }>();
</script>

<template>
  <section class="base-card">
    <h2 v-if="title" class="base-card__title">{{ title }}</h2>
    <div class="base-card__body">
      <slot />
    </div>
  </section>
</template>

<style scoped>
.base-card {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  padding: 1rem 1.25rem;
  margin-bottom: 1rem;
}
.base-card__title {
  margin: 0 0 0.5rem;
  font-size: 1.125rem;
}
</style>
