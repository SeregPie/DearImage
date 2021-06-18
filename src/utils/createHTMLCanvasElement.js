export default function(width, height) {
	try {
		let result = document.createElement('canvas');
		Object.assign(result, {width, height});
		return result;
	} catch {
		// pass
	}
	throw new Error('HTMLCanvasElement is not supported.');
}
