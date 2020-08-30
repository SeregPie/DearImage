import require from '@seregpie/native-require';

export default function(width, height) {
	try {
		let {Canvas} = require('canvas');
		return Object.assign(new Canvas(), {width, height});
	} catch {
		// pass
	}
	throw new Error('Canvas is not supported.');
}
