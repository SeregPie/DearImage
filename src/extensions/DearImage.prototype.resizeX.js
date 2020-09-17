import './DearImage.prototype.resize';
import './DearImage.prototype.scale';

import DearImage from '../core/DearImage';
import Number_isNonNegativeFinite from '../core/Number/isNonNegativeFinite';

let normalizeSize = function(value) {
	value = Number(value);
	if (Number_isNonNegativeFinite(value)) {
		return Math.round(value);
	}
};

DearImage.prototype.resizeX = function(sizeX, proportionally) {
	let {
		sizeX: currentSizeX,
		sizeY: currentSizeY,
	} = this;
	[sizeX = currentSizeX] = [normalizeSize(sizeX)];
	if (proportionally) {
		let scaling = sizeX / currentSizeX;
		return this.scale(scaling);
	}
	return this.resize(sizeX, currentSizeY);
};
