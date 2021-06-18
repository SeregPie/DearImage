export default function(value) {
	try {
		let {OffscreenCanvas} = globalThis;
		return value instanceof OffscreenCanvas;
	} catch {
		// pass
	}
	return false;
}
