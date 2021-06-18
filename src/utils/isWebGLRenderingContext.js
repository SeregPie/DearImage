export default function(value) {
	try {
		let {WebGLRenderingContext} = globalThis;
		return value instanceof WebGLRenderingContext;
	} catch {
		// pass
	}
	return false;
}
