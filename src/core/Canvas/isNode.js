import nativeRequire from '@seregpie/native-require';

export default function(value) {
	try {
		let {Canvas} = nativeRequire('canvas');
		return value instanceof Canvas;
	} catch {
		// pass
	}
	return false;
}
