export default function(value) {
	try {
		let {URL} = globalThis;
		return value instanceof URL;
	} catch {
		// pass
	}
	return false;
}
