# 架构说明

## 总览

```
┌────────────────────────────  pnpm workspace + Turborepo  ────────────────────────────┐
│                                                                                      │
│  apps/frontend (Vue3 + Vite + TS)  ──依赖──►  packages/components (Vue 组件库)         │
│            │                                 packages/utils (TS 工具库)               │
│            │ HTTP (/api/v1, vite proxy)                                               │
│            ▼                                                                          │
│  apps/backend (FastAPI + uv)  ──►  DB / AI 服务 (预留)                                 │
│                                                                                      │
└──────────────────────────────────────────────────────────────────────────────────────┘
```

## 目录职责

| 目录                  | 职责                                                                    |
| --------------------- | ----------------------------------------------------------------------- |
| `apps/frontend`       | Web 前端（Vue3）。小程序/AI 应用作为新 app 平级扩展                     |
| `apps/backend`        | FastAPI 后端，提供 `/api/v1` REST 接口，统一 `{code,message,data}` 包裹 |
| `packages/components` | 跨端共享 Vue 组件库（内部包，源码直连消费）                             |
| `packages/utils`      | 框架无关 TS 工具库（内部包，可 tsup 构建发布）                          |
| `docs`                | 项目文档（架构、开发指南、SDD 流程、发布流程）                          |
| `specs`               | SDD 规格文档：每个 feature 一个目录（spec → plan → tasks）              |
| `build`               | 构建/交付相关：Dockerfile、docker-compose、CI/发布脚本                  |

## 关键决策

1. **内部包源码直连**：`@repo/components`、`@repo/utils` 的 `exports` 指向 TS 源码，由消费方（vite/vitest）编译，免开发期反复 build；`build` 脚本仍可产出 dist 供发布。
2. **Turbo 任务图**：`build/test/lint/typecheck` 均 `dependsOn: ["^build"]`，保证依赖包先行构建。
3. **前后端契约**：后端统一响应包裹结构，与 `@repo/utils` 的 `unwrap()` 一一对应；OpenAPI (`/api/v1/openapi.json`) 为契约源，未来可用 openapi-typescript 生成前端类型。
4. **Python 用 uv**：后端不进入 pnpm 依赖体系，仅提供 package.json 脚本壳以接入 turbo/pnpm 命令入口。
