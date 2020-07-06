import {terser} from 'rollup-plugin-terser';
import nodeResolve from '@rollup/plugin-node-resolve';

import {main} from './package.json';

export default {
	input: 'src/index.js',
	plugins: [
		nodeResolve(),
		terser(),
	],
	output: {
		file: main,
		format: 'umd',
		name: 'DearImage',
	},
};
