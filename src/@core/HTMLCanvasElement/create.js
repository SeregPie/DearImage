export default function(width, height) {
	try {
		return Object.assign(document.createElement('canvas'), {width, height});
	} catch {
		// pass
	}
	throw new Error('HTMLCanvasElement is not supported.');
}
