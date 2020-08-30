import HTMLImageElement_create from '../HTMLImageElement/create';
import Image_createInNode from './createInNode';

export default function(...args) {
	try {
		return HTMLImageElement_create(...args);
	} catch {
		// pass
	}
	return Image_createInNode(...args);
}
