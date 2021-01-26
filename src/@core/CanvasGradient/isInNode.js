export default function(value) {
	try {
		let {CanvasGradient} = require('canvas');
		return value instanceof CanvasGradient;
	} catch {
		// pass
	}
	return false;
}
