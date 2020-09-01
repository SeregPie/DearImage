import require from '@seregpie/native-require';

export default function() {
	try {
		let {Image} = require('canvas');
		return new Image();
	} catch {
		// pass
	}
	throw new Error('Image is not supported.');
}
