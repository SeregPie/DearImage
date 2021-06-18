export default function(value) {
	try {
		let {HTMLCanvasElement} = globalThis;
		return value instanceof HTMLCanvasElement;
	} catch {
		// pass
	}
	return false;
}
