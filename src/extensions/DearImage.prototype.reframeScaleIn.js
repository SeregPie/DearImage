import './DearImage.prototype.reframe';
import './DearImage.prototype.scaleIn';

import DearImage from '../core/DearImage';
import Number_isNonNegativeFinite from '../core/Number/isNonNegativeFinite';

let normalizeSize = function(value) {
	value = Number(value);
	if (Number_isNonNegativeFinite(value)) {
		return Math.round(value);
	}
};

DearImage.prototype.reframeScaleIn = function(sizeX, sizeY, alignmentX, alignmentY) {
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
	return this.scaleIn(sizeX, sizeY).reframe(sizeX, sizeY, alignmentX, alignmentY);
};
