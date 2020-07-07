export default function() {
	try {
		let {Canvas} = module.require('canvas');
		return new Canvas();
	} catch {
		// pass
	}
	throw new Error('Canvas is not supported.');
}
