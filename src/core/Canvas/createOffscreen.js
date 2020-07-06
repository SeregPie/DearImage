export default function() {
	try {
		return new OffscreenCanvas();
	} catch {
		// pass
	}
	throw new Error('OffscreenCanvas is not supported.');
}
