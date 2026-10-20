# @repo/frontend

Vue 3 + Vite + TypeScript + Pinia + Vue Router 前端应用。

## 开发

```bash
pnpm --filter @repo/frontend dev      # 启动 dev server (http://localhost:5173)
pnpm --filter @repo/frontend test     # vitest 单测
pnpm --filter @repo/frontend build    # 产物输出到 dist/
```

## 目录

- `src/api/` — 后端接口封装（axios，走 `/api` vite 代理到 FastAPI）
- `src/router/` — 路由
- `src/stores/` — Pinia stores
- `src/views/` — 页面
- 共享 UI 组件来自 `@repo/components`，工具函数来自 `@repo/utils`

## 扩展方向

- `../h5-weixin`：uni-app / 微信小程序端（占位已建），可复用 `@repo/components` 与 `@repo/utils`
- `../ai-web`：AI 项目（如 chat 应用，占位已建），同样复用 workspace 包
