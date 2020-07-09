import require from '@seregpie/native-require';

export default function(value) {
	try {
		let {Image} = require('canvas');
		return value instanceof Image;
	} catch {
		// pass
	}
	return false;
}
