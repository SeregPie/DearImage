export default function(value) {
	try {
		return value instanceof ImageBitmapRenderingContext;
	} catch {
		// pass
	}
	return false;
}
