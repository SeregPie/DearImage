import createHTMLImageElement from './createHTMLImageElement';

export default function(...args) {
	try {
		return createHTMLImageElement(...args);
	} catch {
		// pass
	}
	let [source] = args;
	try {
		let {Image} = require('canvas');
		let image = new Image();
		image.src = source;
		return image;
	} catch {
		// pass
	}
	throw new Error('Image is not supported.');
}
