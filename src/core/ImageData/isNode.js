export default function(value) {
	try {
		let {ImageData} = require('canvas');
		return value instanceof ImageData;
	} catch (unused) {
		// pass
	}
	return false;
}
