export default function() {
	try {
		let {Image} = module.require('canvas');
		return new Image();
	} catch {
		// pass
	}
	throw new Error('Image is not supported.');
}
