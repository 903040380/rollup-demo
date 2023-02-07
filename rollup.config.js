import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

// 以下注释是为了能使用 VSCode 的类型提示
/**
 * @type { import('rollup').RollupOptions }
 */
const buildOptions = {
  input: ['src/index.js', 'src/util.js'],
  output: [
    {
      dir: 'dist/es',
      format: 'esm',
    },
    {
      dir: 'dist/cjs',
      format: 'cjs',
    },
  ],
  plugins: [resolve(), commonjs()],
}

export default buildOptions
