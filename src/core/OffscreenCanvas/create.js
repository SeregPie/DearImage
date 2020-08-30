export default function(width, height) {
	try {
		return Object.assign(new OffscreenCanvas(), {width, height});
	} catch {
		// pass
	}
	throw new Error('OffscreenCanvas is not supported.');
}
