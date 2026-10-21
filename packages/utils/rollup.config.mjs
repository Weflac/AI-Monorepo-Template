import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

/**
 * Rollup 打包配置（与 tsup 并存的备选产线）。
 * 产物输出到 dist/rollup/，避免与 `pnpm build`（tsup → dist/）互相覆盖：
 *   - index.mjs  ESM
 *   - index.cjs  CommonJS
 *   - types/     合并后的 .d.ts 声明
 * 用法：pnpm --filter @repo/utils build:rollup
 */
export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/rollup/index.mjs',
      format: 'esm',
      sourcemap: true,
    },
    {
      file: 'dist/rollup/index.cjs',
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
    },
  ],
  // 工具库无运行时依赖；如后续引入 dependencies，请加入 external 避免打进产物
  external: [],
  plugins: [
    resolve(),
    typescript({
      tsconfig: './tsconfig.json',
      // 覆盖 tsconfig.base.json 中与打包冲突的选项
      noEmit: false,
      rootDir: 'src',
      declaration: true,
      declarationDir: 'dist/rollup/types',
      exclude: ['**/__tests__/**', '**/*.spec.ts', '**/*.test.ts'],
    }),
  ],
};
