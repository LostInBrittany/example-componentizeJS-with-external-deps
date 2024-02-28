import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
	input: 'src/hello-world.js',
	output: {
		file: 'bundle/hello-world.bundled.js',
		format: 'esm'
	},
	plugins: [
		commonjs(), 
		nodeResolve()
	]
};