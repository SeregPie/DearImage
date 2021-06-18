export default function(value) {
	try {
		return value instanceof HTMLCanvasElement;
	} catch {
		// pass
	}
	return false;
}
