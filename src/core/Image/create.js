import Image_createHTMLElement from './createHTMLElement';
import Image_createNode from './createNode';

export default function() {
	try {
		return Image_createHTMLElement();
	} catch (unused) {
		// pass
	}
	return Image_createNode();
}
