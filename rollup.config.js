import {terser} from 'rollup-plugin-terser';
import nodeResolve from '@rollup/plugin-node-resolve';

import {main} from './package.json';

export default {
	input: 'src/index.js',
	plugins: [
		nodeResolve(),
		terser({mangle: {eval: true}}),
	],
	output: {
		file: main,
		format: 'umd',
		name: 'DearImage',
	},
	onwarn(warning, warn) {
		if (warning.code !== 'EVAL') {
			warn(warning);
		}
	},
};
