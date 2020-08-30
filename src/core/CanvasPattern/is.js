import CanvasPattern_isInNode from './isInNode';

export default function(value) {
	let {CanvasPattern} = globalThis;
	return (
		(!!CanvasPattern && value instanceof CanvasPattern)
		||
		CanvasPattern_isInNode(value)
	);
}
