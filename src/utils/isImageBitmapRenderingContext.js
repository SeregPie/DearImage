export default function(value) {
	try {
		return value instanceof ImageBitmapRenderingContext;
	} catch {}
	return false;
}
