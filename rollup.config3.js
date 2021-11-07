import ts from "rollup-plugin-ts";

export default {
	input: 'aaa/index.ts',
	output: {
		file: 'dist/index.mjs',
	},
	plugins: [
		ts({
			/* Plugin options */
		})
	]
};
