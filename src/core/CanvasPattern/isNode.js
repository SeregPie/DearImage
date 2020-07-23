import require from '@seregpie/native-require';

export default function(value) {
	try {
		let {CanvasPattern} = require('canvas');
		return value instanceof CanvasPattern;
	} catch {
		// pass
	}
	return false;
}
