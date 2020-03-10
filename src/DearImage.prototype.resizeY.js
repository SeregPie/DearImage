import './DearImage.prototype.resize';
import './DearImage.prototype.scale';
import DearImage from './DearImage';

import Number_isNonNegativeFinite from './core/Number/isNonNegativeFinite';

DearImage.prototype.resizeY = function(sizeY, proportionally) {
	if (proportionally) {
		if (this.sizeY) {
			if (Number_isNonNegativeFinite(sizeY)) {
				sizeY = Math.round(sizeY);
				return this.scale(sizeY / this.sizeY);
			}
		}
		return this;
	}
	return this.resize(this.sizeX, sizeY);
};
