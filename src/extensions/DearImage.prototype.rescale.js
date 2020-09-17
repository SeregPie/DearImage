import './DearImage.prototype.resize';

import DearImage from '../core/DearImage';
import Number_isNonNegativeFinite from '../core/Number/isNonNegativeFinite';

let normalizeScaling = function(value) {
	value = Number(value);
	if (Number_isNonNegativeFinite(value)) {
		return value;
	}
};

DearImage.prototype.rescale = function(scalingX, scalingY) {
	let {
		sizeX: currentSizeX,
		sizeY: currentSizeY,
	} = this;
	[
		scalingX = 1,
		scalingY = 1,
	] = [
		normalizeScaling(scalingX),
		normalizeScaling(scalingY),
	];
	let sizeX = currentSizeX * scalingX;
	let sizeY = currentSizeY * scalingY;
	return this.resize(sizeX, sizeY);
};
