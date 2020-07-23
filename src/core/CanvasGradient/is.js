import CanvasGradient_isNode from './isNode';

export default function(value) {
	let {CanvasGradient} = globalThis;
	return (!!CanvasGradient && value instanceof CanvasGradient) || CanvasGradient_isNode(value);
}
