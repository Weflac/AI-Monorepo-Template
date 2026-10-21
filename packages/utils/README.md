# @repo/utils

框架无关的 TypeScript 工具库（monorepo 内部包，源码直接被 apps 消费；也可 `pnpm --filter @repo/utils build` 产出 dist）。

- `date.ts` — 日期格式化
- `string.ts` — 字符串校验 / 转义 / 命名转换
- `http.ts` — API 响应包裹解析等
- 新增工具请补充对应 `src/__tests__` 单测

## 打包

两条并存的产线，产物互不覆盖：

| 命令                                     | 工具                                 | 产物                                                             |
| ---------------------------------------- | ------------------------------------ | ---------------------------------------------------------------- |
| `pnpm --filter @repo/utils build`        | tsup（默认，turbo `build` 任务使用） | `dist/index.js` (ESM)、`dist/index.cjs`、`dist/index.d.ts`       |
| `pnpm --filter @repo/utils build:rollup` | Rollup + @rollup/plugin-typescript   | `dist/rollup/index.mjs` (ESM)、`index.cjs` (CJS)、`types/*.d.ts` |

如要以 Rollup 为正式发布产线：把 `package.json` 的 `exports`/`main`/`types` 指向 `dist/rollup/` 产物，并将 `build` 脚本替换为 `rollup -c` 即可。
