export default function() {
	try {
		return new OffscreenCanvas();
	} catch (unused) {
		// pass
	}
	throw new Error('OffscreenCanvas is not supported.');
}
