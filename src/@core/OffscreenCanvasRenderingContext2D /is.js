export default function(value) {
	let {OffscreenCanvasRenderingContext2D} = globalThis;
	return !!OffscreenCanvasRenderingContext2D && value instanceof OffscreenCanvasRenderingContext2D;
}
