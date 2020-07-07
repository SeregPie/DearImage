import {terser} from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';

import {main} from './package.json';

export default {
	input: 'src/index.js',
	plugins: [
		nodeResolve(),
		commonjs(),
		terser(),
	],
	output: {
		file: main,
		format: 'umd',
		name: 'DearImage',
	},
};
