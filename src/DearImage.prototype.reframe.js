import './DearImage.prototype.crop';
import DearImage from './DearImage';

import String_is from './core/String/is';
import Number_isNonNegativeFinite from './core/Number/isNonNegativeFinite';

DearImage.prototype.reframe = function(sizeX, sizeY, alignmentX, alignmentY) {
	if (Number_isNonNegativeFinite(sizeX)) {
		sizeX = Math.round(sizeX);
	} else {
		({sizeX} = this);
	}
	if (Number_isNonNegativeFinite(sizeY)) {
		sizeY = Math.round(sizeY);
	} else {
		({sizeY} = this);
	}

	let startX = (() => {
		if (String_is(alignmentX)) {
			switch (alignmentX.trim().toLowerCase()) {
				case 'start':
					return 0;
				case 'end':
					return -sizeX;
			}
		}
		return (this.sizeX + sizeX) / -2;
	})();
	let startY = (() => {
		if (String_is(alignmentY)) {
			switch (alignmentY.trim().toLowerCase()) {
				case 'start':
					return 0;
				case 'end':
					return -sizeY;
			}
		}
		return (this.sizeY + sizeY) / -2;
	})();
	return this.crop(startX, startY, sizeX, sizeY);
};
