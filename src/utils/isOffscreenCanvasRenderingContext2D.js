export default function(value) {
	try {
		let {OffscreenCanvasRenderingContext2D} = globalThis;
		return value instanceof OffscreenCanvasRenderingContext2D;
	} catch {
		// pass
	}
	return false;
}
