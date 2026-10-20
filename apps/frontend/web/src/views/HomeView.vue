<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { BaseButton, BaseCard } from '@repo/components';
import { formatDateTime } from '@repo/utils';
import { useCounterStore } from '@/stores/counter';
import { fetchHealth, type HealthResponse } from '@/api/client';

const counter = useCounterStore();
const now = ref(formatDateTime(new Date()));
const health = ref<HealthResponse | null>(null);
const healthError = ref<string | null>(null);

onMounted(async () => {
  try {
    health.value = await fetchHealth();
  } catch {
    healthError.value = '后端未启动或不可达（先运行 pnpm backend:dev）';
  }
});
</script>

<template>
  <div>
    <BaseCard title="欢迎使用 AI Monorepo Template">
      <p>当前时间：{{ now }}</p>
      <p>
        Backend health:
        <span v-if="health">{{ health.status }} (v{{ health.version }})</span>
        <span v-else-if="healthError">{{ healthError }}</span>
        <span v-else>loading...</span>
      </p>
    </BaseCard>

    <BaseCard title="Counter (Pinia + @repo/utils)">
      <p data-testid="count">count = {{ counter.count }}，double = {{ counter.double }}</p>
      <BaseButton data-testid="increment" @click="counter.increment()">+1</BaseButton>
      <BaseButton variant="secondary" @click="counter.reset()">reset</BaseButton>
    </BaseCard>
  </div>
</template>
