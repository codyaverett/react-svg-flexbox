import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs',
  },
  external: [
    'css-layout',
    'prop-types',
    'react',
    'react-dom',
  ],
  plugins: [
    resolve(),
    babel({
      plugins: ['external-helpers'],
      presets: [
        ['env', {
          'modules': false,
        }],
        'stage-0',
        'react'
      ]
    }),
    uglify(),
  ],
};
