# AGENTS.md — AI 编码代理工作约定

适用于 Codex、Claude Code 等所有在本仓库工作的 AI agent 与开发者。

## 仓库速览

- Monorepo：pnpm workspace + Turborepo
- `apps/frontend`：Vue3 + Vite + TS（`@repo/frontend`）
- `apps/backend`：FastAPI + uv（`@repo/backend`，Python，不在 pnpm 依赖图内）
- `packages/components`：共享 Vue 组件（`@repo/components`）
- `packages/utils`：共享 TS 工具（`@repo/utils`）
- `docs/`：项目文档；`specs/`：SDD 规格；`build/`：Docker/交付

## 工作约定（必须遵守）

1. **修改 JavaScript/TypeScript/Vue 文件后必须运行 `npm test`**（等价 `pnpm test`，turbo 全量单测）。
2. **安装依赖优先使用 `pnpm`**（`pnpm add -w` / `pnpm --filter <pkg> add`），禁止混用 npm/yarn 安装。
3. **添加新的生产依赖前先询问确认**；devDependencies 可自行添加但需在 PR/总结中说明。
4. Python 依赖用 `uv add` / `uv add --dev`（在 `apps/backend` 下执行）。

## SDD 流程（feature 级改动）

1. 实现前先阅读 `specs/<feature>/` 下的 spec.md、plan.md、tasks.md；没有 spec 的 feature，先按 `specs/templates/` 补 spec 并征得确认。
2. 按 tasks.md 逐条实现并勾选进度；发现 spec 缺陷先改 spec 再改代码。
3. 完成后运行：`pnpm lint`、`pnpm typecheck`、`pnpm test`；涉及后端时另跑 `pnpm backend:test`。

## 代码规范

- TS：strict 模式（见 `tsconfig.base.json`），ESLint flat config + Prettier，不要绕过类型检查（禁用 `any` 除非有注释说明）。
- Vue：`<script setup lang="ts">`，组件放 `packages/components` 并在 `src/index.ts` 导出（跨 app 复用时）。
- Python：ruff（line-length 100）+ mypy strict；接口一律返回 `{code, message, data}` 包裹（`app/schemas/common.py`）。
- 新代码必须有对应测试：前端/包用 Vitest（`src/__tests__/`），后端用 pytest（`tests/`）。

## Git 提交

- Conventional Commits，scope 限定：frontend | backend | components | utils | docs | build | deps | release | ci | root
- 每个 task 一次 commit；husky 会自动跑 lint-staged 与 commitlint，不要使用 `--no-verify`。

## 边界

- 不要修改 `turbo.json` 任务图、workspace 结构、CI 配置，除非任务明确要求。
- 不要提交 `.env`、密钥、`node_modules`、`dist`、`.turbo`。
