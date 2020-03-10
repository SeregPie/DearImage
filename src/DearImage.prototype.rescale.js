import './DearImage.prototype.resize';
import DearImage from './DearImage';

import Number_isNonNegativeFinite from './core/Number/isNonNegativeFinite';

DearImage.prototype.rescale = function(scalingX, scalingY) {
	let {
		sizeX,
		sizeY,
	} = this;
	if (Number_isNonNegativeFinite(scalingX)) {
		sizeX *= scalingX;
	}
	if (Number_isNonNegativeFinite(scalingY)) {
		sizeY *= scalingY;
	}
	return this.resize(sizeX, sizeY);
};
