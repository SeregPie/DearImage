import Lang_isUndefined from '/utils/Lang/isUndefined';

import PaperDuck from '../index';

PaperDuck.prototype.resize = function(width, height, smoothing = 2) {
	if (Lang_isUndefined(width) && Lang_isUndefined(height)) {
		return this;
	}
	let currentWidth = this.width;
	let currentHeight = this.height;
	if (Lang_isUndefined(width)) {
		if (currentHeight === 0) {
			width = currentWidth;
		} else {
			width = Math.round(currentWidth * height / currentHeight);
		}
	} else
	if (Lang_isUndefined(height)) {
		if (currentWidth === 0) {
			height = currentHeight;
		} else {
			height = Math.round(currentHeight * width / currentWidth);
		}
	}
	if (width === currentWidth && height === currentHeight) {
		return this;
	}
	if (currentWidth === 0 || currentHeight === 0 || width === 0 || height === 0) {
		return this.constructor.blank(width, height);
	}
	if (smoothing < 1) {
		smoothing = 1 / smoothing;
	}
	/*if (smoothing > 1) {
		smoothing /= smoothing - 1;
	} else {
		smoothing = Infinity;
	}

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
	let i = 64;
	while (i--) {
		finished = true;
		let nextWidth = _getNextSize(currentWidth, width);
		let nextHeight = _getNextSize(currentHeight, height);
		if (finished) {
			break;
		}
		let nextContext = this.constructor.blankContext(nextWidth, nextHeight);
		nextContext.scale(nextWidth / currentWidth, nextHeight / currentHeight);
		nextContext.drawImage(currentContext.canvas, 0, 0);
		currentWidth = nextWidth;
		currentHeight = nextHeight;
		currentContext = nextContext;
	}*/
	let currentCanvas = this.canvas;
	let context = this.constructor.blankContext(width, height);
	context.save();
	context.scale(width / currentWidth, height / currentHeight);
	context.drawImage(currentCanvas, 0, 0);
	context.restore();
	return new this.constructor(context);
};
