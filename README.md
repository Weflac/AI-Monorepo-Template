# AI Monorepo Template

> AI-first 的全栈 Monorepo 工程模板：**pnpm workspace + Turborepo + Vue3 + TypeScript + FastAPI**，
> 内置 **Spec-Driven Development (SDD)** 工作流，适配 Codex / Claude Code 等 AI 编码代理。

## 技术栈

| 层        | 技术                                                                                       |
| --------- | ------------------------------------------------------------------------------------------ |
| 工程管理  | pnpm workspace、Turborepo（任务编排/缓存）、Changesets（版本发布）                         |
| 前端      | Vue 3、Vite、TypeScript、Pinia、Vue Router、Axios                                          |
| 组件/工具 | `@repo/components`（Vue 组件库）、`@repo/utils`（TS 工具库）                               |
| 后端      | FastAPI、Pydantic v2、uvicorn，Python 依赖用 uv 管理                                       |
| 质量保障  | ESLint(flat) + Prettier + husky + lint-staged + commitlint + Vitest + pytest + ruff + mypy |
| 测试      | Vitest（前端/组件/工具）、pytest（后端）                                                   |
| 交付      | Docker 多阶段构建 + docker-compose（`build/docker/`）、GitHub Actions CI                   |

## 目录结构

```
.
├── apps/
│   ├── frontend/            # Vue3 + Vite Web 前端（可扩展 miniapp / ai-web 等平级 app）
│   └── backend/             # FastAPI 后端（uv 管理，提供 /api/v1 REST 接口）
├── packages/
│   ├── components/          # 共享 Vue 组件库 (@repo/components)
│   └── utils/               # 共享 TS 工具库 (@repo/utils)
├── build/                   # 构建与交付：Dockerfile、docker-compose、nginx
│   └── docker/
├── docs/                    # 项目文档：架构 / 开发指南 / SDD 流程 / 发布流程
├── specs/                   # SDD 规格文档（spec → plan → tasks），含模板
├── .changeset/              # Changesets 版本管理
├── .github/workflows/ci.yml # CI：lint + typecheck + test + build（JS & Python）
├── .husky/                  # Git hooks：pre-commit(lint-staged)、commit-msg(commitlint)
├── turbo.json               # Turbo 任务图
├── pnpm-workspace.yaml      # workspace 定义 (apps/*, packages/*)
├── tsconfig.base.json       # 共享 TS 配置
├── eslint.config.mjs        # ESLint flat config（TS + Vue）
├── AGENTS.md / CLAUDE.md    # AI 编码代理工作约定
└── README.md
```

## 快速开始

```bash
# 0. 环境：Node >= 20、pnpm >= 9、Python >= 3.11、uv

# 1. 安装 JS 依赖（自动配置 husky）
pnpm install

# 2. 安装后端依赖
cd apps/backend && uv sync && cd ../..

# 3. 启动后端（http://127.0.0.1:8000/docs）
pnpm backend:dev

# 4. 另开终端启动前端（http://localhost:5173，/api 自动代理到后端）
pnpm --filter @repo/frontend dev
```

## 常用命令

| 命令                | 说明                 |
| ------------------- | -------------------- |
| `pnpm build`        | Turbo 全量构建       |
| `pnpm dev`          | 全量 dev（持久任务） |
| `pnpm test`         | 全量测试（vitest）   |
| `pnpm backend:test` | 后端 pytest          |
| `pnpm lint`         | ESLint               |
| `pnpm typecheck`    | vue-tsc / tsc        |
| `pnpm format`       | Prettier 格式化      |
| `pnpm changeset`    | 记录版本变更         |

## AI 开发工作流（SDD）

本仓库采用规格驱动开发，**先 spec 后代码**：

1. 复制 `specs/templates/` 三个模板到 `specs/<NNN>-<feature>/`；
2. 依次完成 `spec.md`（需求与验收标准）→ `plan.md`（技术方案）→ `tasks.md`（任务拆解）；
3. 由 AI agent 或开发者按 tasks 逐条实现，每任务一次 conventional commit；
4. 对照 spec 验收标准勾选，`pnpm test && pnpm lint && pnpm typecheck` 全绿即完成。

详见 [docs/sdd-workflow.md](docs/sdd-workflow.md)；agent 约定见 [AGENTS.md](AGENTS.md)。

## 文档导航

- [docs/architecture.md](docs/architecture.md) — 架构与关键设计决策
- [docs/development-guide.md](docs/development-guide.md) — 环境搭建与日常开发
- [docs/sdd-workflow.md](docs/sdd-workflow.md) — SDD 规格驱动开发流程
- [docs/commit-and-release.md](docs/commit-and-release.md) — 提交规范与版本发布
- [build/README.md](build/README.md) — Docker 构建与部署

## License

MIT
