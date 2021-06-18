import createHTMLImageElement from './createHTMLImageElement';

export default function(...args) {
	try {
		return createHTMLImageElement(...args);
	} catch {
		// pass
	}
	let [src] = args;
	try {
		let {Image} = require('canvas');
		let result = new Image();
		Object.assign(result, {src});
		return result;
	} catch {
		// pass
	}
	throw new Error('Image is not supported.');
}
