import Function_partial from '/utils/Function/partial';
import Lang_isUndefined from '/utils/Number/isNumber';

import PaperDuck from '../index';

let f = function(by, sizeX, sizeY, smoothing) {
	let currSizeX = this.width;
	let currSizeY = this.height;
	if (isNaN(sizeX)) {
		sizeX = currSizeX;
	} else {
		sizeX = Math.abs(sizeX);
	}
	if (isNaN(sizeY)) {
		sizeY = currSizeY;
	} else {
		sizeY = Math.abs(sizeY);
	}
	if (sizeX === currSizeX && sizeY === currSizeY) {
		return this;
	}
	if (currSizeX === 0 || currSizeY === 0 || sizeX === 0 || sizeY === 0) {
		return this.constructor.blank(sizeX, sizeY);
	}
	let scaleFactorX = sizeX / currSizeX;
	let scaleFactorY = sizeY / currSizeY;
	let scaleFactor = by(scaleFactorX, scaleFactorY);
	return this.scale(scaleFactor, smoothing);
};

PaperDuck.prototype.scaleMin = Function_partial(f, Math.min);
PaperDuck.prototype.scaleMax = Function_partial(f, Math.max);
