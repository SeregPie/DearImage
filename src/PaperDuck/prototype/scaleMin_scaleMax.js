import Function_partial from '/utils/Function/partial';
import Lang_isUndefined from '/utils/Number/isNumber';

import PaperDuck from '../index';

let f = function(by, sizeX, sizeY, smoothing) {
	let currentSizeX = this.width;
	let currentSizeY = this.height;
	if (currentSizeX === 0 || currentSizeY === 0) {
		return this.constructor.blank(sizeX, sizeY);
	}
	if (Lang_isUndefined(sizeX)) {
		sizeX = currentSizeX;
	}
	if (Lang_isUndefined(sizeY)) {
		sizeY = currentSizeY;
	}
	let factorX = sizeX / currentSizeX;
	let factorY = sizeY / currentSizeY;
	let factor = by(factorX, factorY);
	return this.scale(factor, smoothing);
};

PaperDuck.prototype.scaleMin = Function_partial(f, Math.min);
PaperDuck.prototype.scaleMax = Function_partial(f, Math.max);
