export default function(width, height) {
	try {
		let canvas = document.createElement('canvas');
		canvas.width = width;
		canvas.height = height;
		return canvas;
	} catch {
		// pass
	}
	throw new Error('HTMLCanvasElement is not supported.');
}
