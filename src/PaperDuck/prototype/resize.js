import Number_isNumber from '/utils/Number/isNumber';

import PaperDuck from '../index';

PaperDuck.prototype.resize = function(width, height, smoothing = 2) {
	let currentWidth = this.width;
	let currentHeight = this.height;
	if (currentWidth === 0 || currentHeight === 0 || width === 0 || height === 0) {
		return this.constructor.blank(width, height);
	}
	if (Number_isNumber(width) && Number_isNumber(height)) {
		// pass
	} else
	if (Number_isNumber(width)) {
		height = Math.round(currentHeight * width / currentWidth);
	} else
	if (Number_isNumber(height)) {
		width = Math.round(currentWidth * height / currentHeight);
	} else {
		return this;
	}
	if (width === currentWidth && height === currentHeight) {
		return this;
	}
	if (smoothing < 1) {
		smoothing = 1 / smoothing;
	}
	if (smoothing > 1) {
		smoothing /= smoothing - 1;
	} else {
		smoothing = Infinity;
	}
	let i = 64;
	let finished;
	let _getNextSize = function(currentSize, size) {
		if (currentSize < size) {
			currentSize = Math.min(Math.round(currentSize * smoothing), size);
		} else
		if (currentSize > size) {
			currentSize = Math.max(Math.round(currentSize / smoothing), size);
		} else {
			return size;
		}
		finished = false;
		return currentSize;
	};
	let currentContext = this.context;
	while (i--) {
		finished = true;
		let nextwidth = _getNextSize(currentWidth, width);
		let nextHeight = _getNextSize(currentHeight, height);
		if (finished) {
			break;
		}
		let nextContext = this.constructor.blankContext(nextwidth, nextHeight);
		nextContext.scale(nextwidth / currentWidth, nextHeight / currentHeight);
		nextContext.drawImage(currentContext.canvas, 0, 0);
		currentWidth = nextwidth;
		currentHeight = nextHeight;
		currentContext = nextContext;
	}
	return new this.constructor(currentContext);
};
