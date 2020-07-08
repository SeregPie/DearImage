import nativeRequire from '@seregpie/native-require';

export default function(value) {
	try {
		let {ImageData} = nativeRequire('canvas');
		return value instanceof ImageData;
	} catch {
		// pass
	}
	return false;
}
