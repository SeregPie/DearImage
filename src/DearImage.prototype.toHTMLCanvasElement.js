import DearImage from './DearImage';

import Canvas_createHTMLElement from './core/Canvas/createHTMLElement';

DearImage.prototype.toHTMLCanvasElement = function() {
	let element = Canvas_createHTMLElement();
	let {
		sizeX,
		sizeY,
	} = this;
	element.width = sizeX;
	element.height = sizeY;
	if (sizeX && sizeY) {
		element.getContext('2d').drawImage(this.canvas, 0, 0);
	}
	return element;
};
