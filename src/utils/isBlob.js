export default function(value) {
	try {
		let {Blob} = globalThis;
		return value instanceof Blob;
	} catch {
		// pass
	}
	return false;
}
