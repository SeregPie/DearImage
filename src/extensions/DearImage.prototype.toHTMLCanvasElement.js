import DearImage from '../core/DearImage';
import HTMLCanvasElement_create from '../core/HTMLCanvasElement/create';

DearImage.prototype.toHTMLCanvasElement = function() {
	let {
		canvas,
		sizeX,
		sizeY,
	} = this;
	let element = HTMLCanvasElement_create(sizeX, sizeY);
	if (sizeX && sizeY) {
		element.getContext('2d').drawImage(canvas, 0, 0);
	}
	return element;
};
