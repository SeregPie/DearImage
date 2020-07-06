export default function() {
	try {
		return new Image();
	} catch {
		// pass
	}
	throw new Error('HTMLImageElement is not supported.');
}
