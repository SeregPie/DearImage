import Canvas_createHTMLElement from './createHTMLElement';
import Canvas_createNode from './createNode';
import Canvas_createOffscreen from './createOffscreen';

export default function() {
	try {
		return Canvas_createHTMLElement();
	} catch {
		// pass
	}
	try {
		return Canvas_createOffscreen();
	} catch {
		// pass
	}
	return Canvas_createNode();
}
