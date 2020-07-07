export default function(value) {
	try {
		let {Image} = module.require('canvas');
		return value instanceof Image;
	} catch {
		// pass
	}
	return false;
}
