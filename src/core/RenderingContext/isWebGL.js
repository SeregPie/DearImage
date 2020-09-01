export default function(value) {
	let {WebGLRenderingContext} = globalThis;
	return !!WebGLRenderingContext && value instanceof WebGLRenderingContext;
}
