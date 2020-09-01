export default function() {
	try {
		return document.createElement('canvas');
	} catch {
		// pass
	}
	throw new Error('HTMLCanvasElement is not supported.');
}
