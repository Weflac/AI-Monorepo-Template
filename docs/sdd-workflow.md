# SDD（Spec-Driven Development）工作流

本仓库采用 Codex / Claude Code 风格的 **规格驱动开发**：先写规格，再写计划，再拆任务，最后由 AI/人实现并验收。

## 流程

```
需求 → specs/<NNN>-<feature>/spec.md   (WHAT & WHY：用户故事、验收标准、边界)
     → specs/<NNN>-<feature>/plan.md   (HOW：技术方案、影响面、数据契约)
     → specs/<NNN>-<feature>/tasks.md  (拆解：可独立验收的小任务清单)
     → 实现（每个任务一次 commit，遵循 conventional commits）
     → 验收（对照 spec 的 Acceptance Criteria 勾选）
```

## 约定

1. 目录编号三位递增：`specs/001-user-auth/`、`specs/002-chat-stream/`…
2. 模板在 [`specs/templates/`](../specs/templates/)，直接复制使用。
3. **spec 先行**：没有 spec 的 feature 不开工；AI agent（见根目录 `AGENTS.md` / `CLAUDE.md`）实现前必须先读对应 spec。
4. 实现过程中如发现 spec 缺陷，先改 spec 再改代码，保持文档与实现一致。
5. 任务完成的标准：`pnpm test`、`pnpm lint`、`pnpm typecheck` 全绿 + spec 验收项全部勾选。

## 与 AI Agent 协作

- 给 Codex / Claude Code 的提示词中引用 `specs/<feature>/` 目录即可，agent 约定见根目录 `AGENTS.md`。
- 每个任务粒度控制在一次可审查的 diff（建议 < 400 行）。
