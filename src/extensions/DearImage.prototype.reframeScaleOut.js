import './DearImage.prototype.reframe';
import './DearImage.prototype.scaleOut';

import DearImage from '../core/DearImage';
import Number_isNonNegativeFinite from '../core/Number/isNonNegativeFinite';

let normalizeSize = function(value) {
	value = Number(value);
	if (Number_isNonNegativeFinite(value)) {
		return Math.round(value);
	}
};

DearImage.prototype.reframeScaleOut = function(sizeX, sizeY, alignmentX, alignmentY) {
	let {
		sizeX: currentSizeX,
		sizeY: currentSizeY,
	} = this;
	[
		sizeX = currentSizeX,
		sizeY = currentSizeY,
	] = [
		normalizeSize(sizeX),
		normalizeSize(sizeY),
	];
	return this.scaleOut(sizeX, sizeY).reframe(sizeX, sizeY, alignmentX, alignmentY);
};
