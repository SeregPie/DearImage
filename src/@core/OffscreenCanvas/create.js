export default function(width, height) {
	try {
		return new OffscreenCanvas(width, height);
	} catch {
		// pass
	}
	throw new Error('OffscreenCanvas is not supported.');
}
