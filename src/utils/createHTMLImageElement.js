export default function(source) {
	try {
		let image = new Image();
		image.src = source;
		return image;
	} catch {}
	throw new Error('HTMLImageElement is not supported.');
}
