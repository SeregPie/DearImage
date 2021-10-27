import isHTMLImageElement from './isHTMLImageElement';

export default function(value) {
	return (
		isHTMLImageElement(value)
		||
		(() => {
			try {
				let {Image} = require('canvas');
				return value instanceof Image;
			} catch {
				// pass
			}
			return false;
		})()
	);
}
