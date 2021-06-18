export default function(src) {
	try {
		let result = new Image();
		Object.assign(result, {src});
		return result;
	} catch {
		// pass
	}
	throw new Error('HTMLImageElement is not supported.');
}
