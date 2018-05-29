import Lang_isUndefined from '/utils/Lang/isUndefined';

import PaperDuck from '../index';

PaperDuck.prototype.cropAlign = function(width, height, align) {
	let currentWidth = this.getWidth();
	let currentHeight = this.getHeight();
	if (Lang_isUndefined(width)) {
		width = currentWidth;
	} else {
		width = Math.min(width, currentWidth);
	}
	if (Lang_isUndefined(height)) {
		height = currentHeight;
	} else {
		height = Math.min(height, currentHeight);
	}
	return this.clipAlign(width, height, align);
};
