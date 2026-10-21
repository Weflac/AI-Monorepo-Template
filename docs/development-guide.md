# 开发指南

## 环境要求

- Node.js >= 22.22.1，pnpm >= 11（仓库已用 `packageManager` 锁定 pnpm 版本）
- Python >= 3.11，[uv](https://docs.astral.sh/uv/)
- Git（husky hooks 依赖）

## 初始化

```bash
pnpm install                 # 安装 JS 依赖 + 自动配置 husky
cd apps/backend && uv sync   # 安装 Python 依赖
```

## 常用命令（根目录）

| 命令                | 说明                               |
| ------------------- | ---------------------------------- |
| `pnpm dev`          | 并行启动所有 dev 任务（前端 vite） |
| `pnpm backend:dev`  | 启动 FastAPI（uvicorn --reload）   |
| `pnpm build`        | turbo 全量构建                     |
| `pnpm test`         | turbo 全量测试（vitest）           |
| `pnpm backend:test` | 后端 pytest                        |
| `pnpm lint`         | ESLint（前端与 packages）          |
| `pnpm typecheck`    | vue-tsc / tsc 类型检查             |
| `pnpm format`       | Prettier 全量格式化                |

## 新增一个 app / package

1. `apps/<name>`、`apps/frontend/<name>` 或 `packages/<name>` 下创建 `package.json`（name 用 `@repo/<name>`，workspace 已包含 `apps/*`、`apps/frontend/*`、`packages/*`）；
2. workspace 依赖写 `"@repo/utils": "workspace:*"`；
3. 在 turbo 任务图内补齐 `build/dev/lint/test/typecheck` 脚本（缺省的任务会被 turbo 自动跳过）。

## 前后端联调

前端 dev server 将 `/api` 代理到 `http://127.0.0.1:8000`（可在 `apps/frontend/.env` 用 `VITE_API_PROXY` 覆盖）。先起后端再起前端。
