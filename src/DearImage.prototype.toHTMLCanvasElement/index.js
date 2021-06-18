import DearImage from '../DearImage';

import createHTMLCanvasElement from '../utils/createHTMLCanvasElement';

DearImage.prototype.toHTMLCanvasElement = function() {
	let {
		sizeX,
		sizeY,
	} = this;
	let result = createHTMLCanvasElement(sizeX, sizeY);
	if (sizeX && sizeY) {
		let {canvas} = this;
		result.getContext('2d').drawImage(canvas, 0, 0);
	}
	return result;
};
