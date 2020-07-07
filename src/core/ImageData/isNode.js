export default function(value) {
	try {
		let {ImageData} = module.require('canvas');
		return value instanceof ImageData;
	} catch {
		// pass
	}
	return false;
}
