import PaperDuck from './PaperDuck';

PaperDuck.prototype.resize = function(sizeX, sizeY, smoothing) {
	sizeX = Number.parseInt(sizeX);
	sizeY = Number.parseInt(sizeY);
	if (!Number.isFinite(sizeX) && !Number.isFinite(sizeY)) {
		return this;
	}
	if (Number.isFinite(sizeX)) {
		sizeX = Math.abs(sizeX);
	}
	if (Number.isFinite(sizeY)) {
		sizeY = Math.abs(sizeY);
	}
	let currSizeX = this.width;
	let currSizeY = this.height;
	if (!Number.isFinite(sizeX)) {
		if (currSizeY === 0) {
			return this.constructor.blank(0, sizeY);
		}
		sizeX = Math.round(currSizeX * sizeY / currSizeY);
	} else
	if (!Number.isFinite(sizeY)) {
		if (currSizeX === 0) {
			return this.constructor.blank(sizeX, 0);
		}
		sizeY = Math.round(currSizeY * sizeX / currSizeX);
	}
	if (sizeX === currSizeX && sizeY === currSizeY) {
		return this;
	}
	if (currSizeX === 0 || currSizeY === 0 || sizeX === 0 || sizeY === 0) {
		return this.constructor.blank(sizeX, sizeY);
	}
	smoothing = Number.parseFloat(smoothing);
	if (!Number.isFinite(smoothing)) {
		smoothing = 2;
	} else
	if (smoothing > 1) {
		smoothing /= smoothing - 1;
	} else {
		smoothing = Infinity;
	}
	let finished;
	let _getNextSize = function(currSize, lastSize) {
		if (currSize < lastSize) {
			currSize = Math.min(Math.round(currSize * smoothing), lastSize);
		} else
		if (currSize > lastSize) {
			currSize = Math.max(Math.round(currSize / smoothing), lastSize);
		} else {
			return lastSize;
		}
		finished = false;
		return currSize;
	};
	let canvas = this.toCanvas();
	for (let i = 64; i--;) {
		finished = true;
		let nextSizeX = _getNextSize(currSizeX, sizeX);
		let nextSizeY = _getNextSize(currSizeY, sizeY);
		if (finished) break;
		let ctx = this.constructor.blankContext(nextSizeX, nextSizeY);
		ctx.scale(nextSizeX / currSizeX, nextSizeY / currSizeY);
		ctx.drawImage(canvas, 0, 0);
		currSizeX = nextSizeX;
		currSizeY = nextSizeY;
		canvas = ctx.canvas;
	}
	return this.constructor.from(canvas);
};
