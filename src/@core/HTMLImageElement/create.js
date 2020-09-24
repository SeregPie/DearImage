export default function(src) {
	try {
		return Object.assign(new Image(), {src});
	} catch {
		// pass
	}
	throw new Error('HTMLImageElement is not supported.');
}
