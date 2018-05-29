import Lang_isUndefined from '/utils/Lang/isUndefined';

import PaperDuck from '../index';

PaperDuck.prototype.cropAlign = function(sizeX, sizeY, align) {
	let currentSizeX = this.getWidth();
	let currentSizeY = this.getHeight();
	if (Lang_isUndefined(sizeX)) {
		sizeX = currentSizeX;
	} else {
		sizeX = Math.min(sizeX, currentSizeX);
	}
	if (Lang_isUndefined(sizeY)) {
		sizeY = currentSizeY;
	} else {
		sizeY = Math.min(sizeY, currentSizeY);
	}
	return this.clipAlign(sizeX, sizeY, align);
};
