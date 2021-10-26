export default function(value) {
	try {
		return value instanceof OffscreenCanvas;
	} catch {}
	return false;
}
