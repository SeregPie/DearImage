export default function(value) {
	try {
		let {Canvas} = require('canvas');
		return value instanceof Canvas;
	} catch (unused) {
		// pass
	}
	return false;
}
