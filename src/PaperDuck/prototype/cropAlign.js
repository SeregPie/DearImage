import Lang_isUndefined from '/utils/Lang/isUndefined';

import PaperDuck from '../index';

PaperDuck.prototype.cropAlign = function(width, height, align = '') {
	let currentWidth = this.width;
	let currentHeight = this.height;
	if (Lang_isUndefined(width)) {
		width = currentWidth;
	}
	if (Lang_isUndefined(height)) {
		height = currentHeight;
	}
	if (width === currentWidth && height === currentHeight) {
		return this;
	}
	if (currentWidth === 0 || currentHeight === 0 || width === 0 || height === 0) {
		return this.constructor.blank(width, height);
	}
	switch (align) {
		case 'left top':
			return this.crop(0, 0, width, height);
		case 'left bottom':
			return this.crop(0, -height, width, height);
		case 'left center':
			return this.crop(0, (currentHeight + height) / 2, width, -height);
		case 'right top':
			return this.crop(-width, 0, width, height);
		case 'right bottom':
			return this.crop(-width, -height, width, height);
		case 'right center':
			return this.crop(-width, (currentHeight + height) / 2, width, -height);
		case 'center top':
			return this.crop((currentWidth + width) / 2, 0, -width, height);
		case 'center bottom':
			return this.crop((currentWidth + width) / 2, -height, -width, height);
	}
	return this.crop((currentWidth + width) / 2, (currentHeight + height) / 2, -width, -height);
};
