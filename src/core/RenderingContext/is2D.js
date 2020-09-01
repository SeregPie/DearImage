export default function(value) {
	let {CanvasRenderingContext2D} = globalThis;
	return !!CanvasRenderingContext2D && value instanceof CanvasRenderingContext2D;
}
