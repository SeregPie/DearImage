import Image_isHTMLElement from './isHTMLElement';
import Image_isNode from './isNode';

export default function(value) {
	return (
		Image_isHTMLElement(value)
		||
		Image_isNode(value)
	);
}
