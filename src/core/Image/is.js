import HTMLImageElement_is from '../HTMLImageElement/is';
import Image_isInNode from './isInNode';

export default function(value) {
	return (
		HTMLImageElement_is(value)
		||
		Image_isInNode(value)
	);
}
