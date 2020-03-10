import './DearImage.prototype.resize';
import './DearImage.prototype.scale';
import DearImage from './DearImage';

import Number_isNonNegativeFinite from './core/Number/isNonNegativeFinite';

DearImage.prototype.resizeX = function(sizeX, proportionally) {
	if (proportionally) {
		if (this.sizeX) {
			if (Number_isNonNegativeFinite(sizeX)) {
				sizeX = Math.round(sizeX);
				return this.scale(sizeX / this.sizeX);
			}
		}
		return this;
	}
	return this.resize(sizeX, this.sizeY);
};
