import nativeRequire from '@seregpie/native-require';

export default function(value) {
	try {
		let {Image} = nativeRequire('canvas');
		return value instanceof Image;
	} catch {
		// pass
	}
	return false;
}
