export default function(value) {
	try {
		let {WebGL2RenderingContext} = globalThis;
		return value instanceof WebGL2RenderingContext;
	} catch {
		// pass
	}
	return false;
}
