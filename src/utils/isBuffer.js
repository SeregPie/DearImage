export default function(value) {
	try {
		let {Buffer} = globalThis;
		return value instanceof Buffer;
	} catch {
		// pass
	}
	return false;
}
