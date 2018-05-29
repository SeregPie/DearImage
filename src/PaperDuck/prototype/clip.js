import Lang_isUndefined from '/utils/Lang/isUndefined';

import PaperDuck from '../index';

PaperDuck.prototype.clip = function(offsetX = 0, offsetY = 0, sizeX, sizeY) {
	let currentSizeX = this.width;
	let currentSizeY = this.height;
	if (offsetX < 0) {
		offsetX += currentSizeX;
	}
	if (offsetY < 0) {
		offsetY += currentSizeY;
	}
	if (Lang_isUndefined(sizeX)) {
		sizeX = currentSizeX;
	} else if (sizeX < 0) {
		sizeX = -sizeX;
		offsetX -= sizeX;
	}
	if (Lang_isUndefined(sizeY)) {
		sizeY = currentSizeY;
	} else if (sizeY < 0) {
		sizeY = -sizeY;
		offsetY -= sizeY;
	}
	if (offsetX === 0 && offsetY === 0 && sizeX === currentSizeX && sizeY === currentSizeY) {
		return this;
	}
	if (sizeX === 0 || sizeY === 0) {
		return this.constructor.blank(sizeX, sizeY);
	}
	let context = this.constructor.blankContext(sizeX, sizeY);
	context.drawImage(this.canvas, -offsetX, -offsetY);
	return new this.constructor(context);
};
