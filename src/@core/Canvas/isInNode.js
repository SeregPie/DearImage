import require from '@seregpie/native-require';

export default function(value) {
	try {
		let {Canvas} = require('canvas');
		return value instanceof Canvas;
	} catch {
		// pass
	}
	return false;
}
