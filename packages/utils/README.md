# @repo/utils

框架无关的 TypeScript 工具库（monorepo 内部包，源码直接被 apps 消费；也可 `pnpm --filter @repo/utils build` 产出 dist）。

- `date.ts` — 日期格式化
- `string.ts` — 字符串校验 / 转义 / 命名转换
- `http.ts` — API 响应包裹解析等
- 新增工具请补充对应 `src/__tests__` 单测
