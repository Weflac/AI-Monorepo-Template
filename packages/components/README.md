# @repo/components

Vue 3 共享组件库（monorepo 内部包，直接以 TS 源码形式被 apps 消费）。

- `src/BaseButton.vue`、`src/BaseCard.vue` 为示例组件
- 新组件请在 `src/index.ts` 中导出，并补充 `src/__tests__/*.spec.ts`
- `pnpm --filter @repo/components build` 可用 vite lib 模式产出 dist（发布或给非 vite 消费方使用）
