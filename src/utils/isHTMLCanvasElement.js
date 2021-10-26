export default function(value) {
	try {
		return value instanceof HTMLCanvasElement;
	} catch {}
	return false;
}
