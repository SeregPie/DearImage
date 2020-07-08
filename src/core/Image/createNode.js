import nativeRequire from '@seregpie/native-require';

export default function() {
	try {
		let {Image} = nativeRequire('canvas');
		return new Image();
	} catch {
		// pass
	}
	throw new Error('Image is not supported.');
}
