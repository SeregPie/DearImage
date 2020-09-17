// todo

import './DearImage.blank';
import './DearImage.drawed';

import DearImage from '../core/DearImage';
import Function_prototype_bindPartial from '../core/Function/prototype/bindPartial';

let f = function(b, image, options) {
	let {
		canvas: currentCanvas,
		sizeX,
		sizeY,
	} = this;
	if (sizeX && sizeY) {
		let {canvas} = DearImage.drawed(image, sizeX, sizeY, options);
		let result = this.constructor.blank(sizeX, sizeY);
		let {context} = result;
		if (b) {
			context.drawImage(currentCanvas, 0, 0);
			context.drawImage(canvas, 0, 0);
		} else {
			context.drawImage(currentCanvas, 0, 0);
			context.drawImage(canvas, 0, 0);
		}
		return result;
	}
	return this;
};

Object.assign(DearImage.prototype, {
	drawBackground: Function_prototype_bindPartial(f, false),
	drawForeground: Function_prototype_bindPartial(f, true),
});