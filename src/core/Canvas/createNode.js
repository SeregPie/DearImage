import nativeRequire from '@seregpie/native-require';

export default function() {
	try {
		let {Canvas} = nativeRequire('canvas');
		return new Canvas();
	} catch (error) {
		console.log(error);
		// pass
	}
	throw new Error('Canvas is not supported.');
}
