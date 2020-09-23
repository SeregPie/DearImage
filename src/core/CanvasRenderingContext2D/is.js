import CanvasRenderingContext2D_isInNode from './isInNode';

export default function(value) {
	let {CanvasRenderingContext2D} = globalThis;
	return (
		(!!CanvasRenderingContext2D && value instanceof CanvasRenderingContext2D)
		||
		CanvasRenderingContext2D_isInNode(value)
	);
}
