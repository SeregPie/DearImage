import Canvas_isInNode from './isInNode';
import HTMLCanvasElement_is from '../HTMLCanvasElement/is';
import OffscreenCanvas_is from '../OffscreenCanvas/is';

export default function(value) {
	return (
		HTMLCanvasElement_is(value)
		||
		OffscreenCanvas_is(value)
		||
		Canvas_isInNode(value)
	);
}
