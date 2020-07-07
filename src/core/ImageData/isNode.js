import require from '../require';

export default function(value) {
	try {
		let {ImageData} = require('canvas');
		return value instanceof ImageData;
	} catch {
		// pass
	}
	return false;
}
