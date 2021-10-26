export default function(value) {
	try {
		return value instanceof OffscreenCanvasRenderingContext2D;
	} catch {}
	return false;
}
