export default function() {
	try {
		let {Image} = require('canvas');
		return new Image();
	} catch (unused) {
		// pass
	}
	throw new Error('Image is not supported.');
}
