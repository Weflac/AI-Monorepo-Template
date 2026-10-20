# CLAUDE.md

本仓库的 AI agent 工作约定统一维护在 [AGENTS.md](./AGENTS.md)，请完整阅读并遵守，要点：

1. 修改 JS/TS/Vue 文件后必须运行 `npm test`。
2. 安装依赖优先 `pnpm`；新增生产依赖前先询问确认。
3. Feature 开发遵循 SDD：先读/写 `specs/<feature>/`（spec → plan → tasks），再实现。
4. 提交遵循 Conventional Commits（commitlint 强制），禁止 `--no-verify`。
5. 质量门槛：`pnpm lint`、`pnpm typecheck`、`pnpm test`（后端另有 `pnpm backend:test`）全绿。

目录与架构速查见 [docs/architecture.md](./docs/architecture.md)。
