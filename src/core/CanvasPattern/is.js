import CanvasPattern_isNode from './isNode';

export default function(value) {
	let {CanvasPattern} = globalThis;
	return (!!CanvasPattern && value instanceof CanvasPattern) || CanvasPattern_isNode(value);
}
