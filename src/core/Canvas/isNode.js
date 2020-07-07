import require from '../require';

export default function(value) {
	try {
		let {Canvas} = require('canvas');
		return value instanceof Canvas;
	} catch {
		// pass
	}
	return false;
}
