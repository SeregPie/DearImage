import createHTMLCanvasElement from './createHTMLCanvasElement';
import createOffscreenCanvas from './createOffscreenCanvas';

export default function(...args) {
	try {
		return createHTMLCanvasElement(...args);
	} catch {
		// pass
	}
	try {
		return createOffscreenCanvas(...args);
	} catch {
		// pass
	}
	let [width, height] = args;
	try {
		let {Canvas} = require('canvas');
		return new Canvas(width, height);
	} catch {
		// pass
	}
	throw new Error('Canvas is not supported.');
}
