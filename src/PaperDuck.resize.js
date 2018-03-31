import Lang_isUndefined from 'x/src/Lang/isUndefined';

import PaperDuck from './PaperDuck';
import PaperDuck_blank from './blank';
import PaperDuck_blankContext from './blankContext';

export default function(instance, sizeX, sizeY, smoothing = 2) {
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
	let currSizeX = instance.width;
	let currSizeY = instance.height;
	if (!Number.isFinite(sizeX)) {
		if (currSizeY === 0) {
			return PaperDuck_blank(0, sizeY);
		}
		sizeX = Math.round(currSizeX * sizeY / currSizeY);
	} else
	if (!Number.isFinite(sizeY)) {
		if (currSizeX === 0) {
			return PaperDuck_blank(sizeX, 0);
		}
		sizeY = Math.round(currSizeY * sizeX / currSizeX);
	}
	if (sizeX === currSizeX && sizeY === currSizeY) {
		return instance;
	}
	if (currSizeX === 0 || currSizeY === 0 || sizeX === 0 || sizeY === 0) {
		return PaperDuck_blank(sizeX, sizeY);
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
	let canvas = instance.canvas;
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
	return new PaperDuck(canvas);
}
