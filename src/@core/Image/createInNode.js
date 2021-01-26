export default function(src) {
	try {
		let {Image} = require('canvas');
		return Object.assign(new Image(), {src});
	} catch {
		// pass
	}
	throw new Error('Image is not supported.');
}
