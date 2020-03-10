export default function(value) {
	try {
		let {Image} = require('canvas');
		return value instanceof Image;
	} catch (unused) {
		// pass
	}
	return false;
}
