export default function(value) {
	try {
		let {HTMLImageElement} = globalThis;
		return value instanceof HTMLImageElement;
	} catch {
		// pass
	}
	return false;
}
