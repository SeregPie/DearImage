export default function(value) {
	try {
		return value instanceof WebGLRenderingContext;
	} catch {}
	return false;
}
