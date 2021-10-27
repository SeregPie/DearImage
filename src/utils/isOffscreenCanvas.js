export default function(value) {
	try {
		return value instanceof OffscreenCanvas;
	} catch {
		// pass
	}
	return false;
}
