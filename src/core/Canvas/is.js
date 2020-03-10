import Canvas_isHTMLElement from './isHTMLElement';
import Canvas_isNode from './isNode';
import Canvas_isOffscreen from './isOffscreen';

export default function(value) {
	return Canvas_isHTMLElement(value) || Canvas_isOffscreen(value) || Canvas_isNode(value);
}
