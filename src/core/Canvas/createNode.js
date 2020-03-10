export default function() {
	try {
		let {Canvas} = require('canvas');
		return new Canvas();
	} catch (unused) {
		// pass
	}
	throw new Error('Canvas is not supported.');
}
