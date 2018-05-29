import Number_isNumber from '/utils/Number/isNumber';

import PaperDuck from '../index';

PaperDuck.prototype.resize = function(sizeX, sizeY, smoothing = 2) {
	let currentSizeX = this.width;
	let currentSizeY = this.height;
	if (currentSizeX === 0 || currentSizeY === 0 || sizeX === 0 || sizeY === 0) {
		return this.constructor.blank(sizeX, sizeY);
	}
	if (Number_isNumber(sizeX) && Number_isNumber(sizeY)) {
		// pass
	} else
	if (Number_isNumber(sizeX)) {
		sizeY = Math.round(currentSizeY * sizeX / currentSizeX);
	} else
	if (Number_isNumber(sizeY)) {
		sizeX = Math.round(currentSizeX * sizeY / currentSizeY);
	} else {
		return this;
	}
	if (sizeX === currentSizeX && sizeY === currentSizeY) {
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
		let nextSizeX = _getNextSize(currentSizeX, sizeX);
		let nextSizeY = _getNextSize(currentSizeY, sizeY);
		if (finished) {
			break;
		}
		let nextContext = this.constructor.blankContext(nextSizeX, nextSizeY);
		nextContext.scale(nextSizeX / currentSizeX, nextSizeY / currentSizeY);
		nextContext.drawImage(currentContext.canvas, 0, 0);
		currentSizeX = nextSizeX;
		currentSizeY = nextSizeY;
		currentContext = nextContext;
	}
	return new this.constructor(currentContext);
};
