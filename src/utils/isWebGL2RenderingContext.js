export default function(value) {
	try {
		return value instanceof WebGL2RenderingContext;
	} catch {}
	return false;
}
