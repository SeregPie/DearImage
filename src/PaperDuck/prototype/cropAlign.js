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
	align = Array.from(new Set(align.toLowerCase().split(/\s+/).filter(s => s))).sort();
	switch (align) {
		case 'bottom':
			return this.clip((currentWidth + width) / 2, -height, -width, height);
		case 'bottom left':
			return this.clip(0, -height, width, height);
		case 'bottom right':
			return this.clip(-width, -height, width, height);
		case 'left':
			return this.clip(0, (currentHeight + height) / 2, width, -height);
		case 'left top':
			return this.clip(0, 0, width, height);
		case 'right':
			return this.clip(-width, (currentHeight + height) / 2, width, -height);
		case 'right top':
			return this.clip(-width, 0, width, height);
		case 'top':
			return this.clip((currentWidth + width) / 2, 0, -width, height);
	}
	return this.crop((currentWidth + width) / 2, (currentHeight + height) / 2, -width, -height);
};
