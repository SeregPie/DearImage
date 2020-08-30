import Canvas_createInNode from './createInNode';
import HTMLCanvasElement_create from '../HTMLCanvasElement/create';
import OffscreenCanvas_create from '../OffscreenCanvas/create';

export default function(...args) {
	try {
		return HTMLCanvasElement_create(...args);
	} catch {
		// pass
	}
	try {
		return OffscreenCanvas_create(...args);
	} catch {
		// pass
	}
	return Canvas_createInNode(...args);
}
