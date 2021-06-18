export default function(value) {
	try {
		let {ImageBitmapRenderingContext} = globalThis;
		return value instanceof ImageBitmapRenderingContext;
	} catch {
		// pass
	}
	return false;
}
