export default function() {
	try {
		return document.createElement('canvas');
	} catch (unused) {
		// pass
	}
	throw new Error('HTMLCanvasElement is not supported.');
}
