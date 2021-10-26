import isHTMLCanvasElement from './isHTMLCanvasElement';
import isOffscreenCanvas from './isOffscreenCanvas';

export default function(value) {
	return (
		isHTMLCanvasElement(value)
		||
		isOffscreenCanvas(value)
		||
		(() => {
			try {
				let {Canvas} = require('canvas');
				return value instanceof Canvas;
			} catch {}
			return false;
		})()
	);
}
