import Lang_isUndefined from '/utils/Lang/isUndefined';

import PaperDuck from '../index';

PaperDuck.prototype.crop = function(left = 0, top = 0, width, height) {
	let currentWidth = this.width;
	let currentHeight = this.height;
	if (left < 0) {
		left += currentWidth;
	}
	if (top < 0) {
		top += currentHeight;
	}
	if (Lang_isUndefined(width)) {
		width = currentWidth;
	} else if (width < 0) {
		width = -width;
		left -= width;
	}
	if (Lang_isUndefined(height)) {
		height = currentHeight;
	} else if (height < 0) {
		height = -height;
		top -= height;
	}
	if (left === 0 && top === 0 && width === currentWidth && height === currentHeight) {
		return this;
	}
	if (width === 0 || height === 0) {
		return this.constructor.blank(width, height);
	}
	let currentCanvas = this.canvas;
	let context = this.constructor.blankContext(width, height);
	context.drawImage(currentCanvas, -left, -top);
	return new this.constructor(context);
};
