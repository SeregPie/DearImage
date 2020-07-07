export default function(value) {
	try {
		let {Canvas} = module.require('canvas');
		return value instanceof Canvas;
	} catch {
		// pass
	}
	return false;
}
