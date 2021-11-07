import DearImage from '../DearImage';

import createHTMLCanvasElement from '../utils/createHTMLCanvasElement';

DearImage.prototype.toHTMLCanvasElement = function() {
	let {
		canvas,
		width: sizeX,
		height: sizeY,
	} = this;
	let result = createHTMLCanvasElement(sizeX, sizeY);
	result.getContext('2d').drawImage(canvas, 0, 0);
	return result;
};
