import CanvasGradient_isInNode from './isInNode';

export default function(value) {
	let {CanvasGradient} = globalThis;
	return (
		(!!CanvasGradient && value instanceof CanvasGradient)
		||
		CanvasGradient_isInNode(value)
	);
}
