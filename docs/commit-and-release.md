# 提交规范与版本发布

## Conventional Commits（commitlint 强制）

```
<type>(<scope>): <subject>

type: feat | fix | docs | style | refactor | perf | test | build | ci | chore | revert
scope: frontend | backend | components | utils | docs | build | deps | release | ci | root
```

示例：`feat(frontend): 增加聊天流式渲染`、`fix(backend): 修复 items 404 响应包裹`

提交时 husky 会执行：

- `pre-commit` → lint-staged（ESLint --fix + Prettier）
- `commit-msg` → commitlint 校验

## Changesets 版本发布

```bash
pnpm changeset           # 交互式记录变更（选择包与 semver 级别）
pnpm version-packages    # 消费 changeset， bump 版本 + 生成 CHANGELOG
pnpm release             # 构建 packages 并 publish（需配置 registry）
```

内部私有包（`"private": true`）不会被发布，changesets 仅用于维护版本号与 CHANGELOG。
