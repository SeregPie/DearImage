export default function(value) {
	try {
		let {CanvasRenderingContext2D} = require('canvas');
		return value instanceof CanvasRenderingContext2D;
	} catch {
		// pass
	}
	return false;
}
