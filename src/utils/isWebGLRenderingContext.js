export default function(value) {
	try {
		return value instanceof WebGLRenderingContext;
	} catch {
		// pass
	}
	return false;
}
