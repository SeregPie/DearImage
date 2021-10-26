import createHTMLCanvasElement from './createHTMLCanvasElement';
import createOffscreenCanvas from './createOffscreenCanvas';

export default function(...args) {
	try {
		return createHTMLCanvasElement(...args);
	} catch {}
	try {
		return createOffscreenCanvas(...args);
	} catch {}
	let [width, height] = args;
	try {
		let {Canvas} = require('canvas');
		return new Canvas(width, height);
	} catch {}
	throw new Error('Canvas is not supported.');
}
