import typescript from 'rollup-plugin-typescript2';
import pkg from '../package.json';

export function getConfig({
  tsconfig = './tsconfig.json',
  output = [
    {
      file: `dist/${pkg.displayName}.js`,
      format: 'cjs',
      exports: 'named',
    },
    {
      file: `dist/${pkg.displayName}.es.js`,
      format: 'esm',
    },
  ],
  plugins = [],
} = {}) {
  return {
    input: 'src/index.ts',
    external: ['react'],
    plugins: [
      typescript({
        tsconfig,
        clean: true,
      }),
      ...plugins,
    ],
    output,
  };
}

export default getConfig();
