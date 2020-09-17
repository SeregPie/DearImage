import './DearImage.blank';

import DearImage from '../core/DearImage';
import Number_isNonNegativeFinite from '../core/Number/isNonNegativeFinite';

let normalizeSize = function(value) {
	value = Number(value);
	if (Number_isNonNegativeFinite(value)) {
		return Math.round(value);
	}
};
DearImage.prototype.resize = function(sizeX, sizeY) {
	let {
		canvas: currentCanvas,
		sizeX: currentSizeX,
		sizeY: currentSizeY,
	} = this;
	[
		sizeX = currentSizeX,
		sizeY = currentSizeY,
	] = [
		normalizeSize(sizeX),
		normalizeSize(sizeY),
	];
	if (sizeX !== currentSizeX || sizeY !== currentSizeY) {
		let result = this.constructor.blank(sizeX, sizeY);
		if (sizeX && sizeY && currentSizeX && currentSizeY) {
			let scalingX = sizeX / currentSizeX;
			let scalingY = sizeY / currentSizeY;
			let {context} = result;
			context.save();
			context.scale(scalingX, scalingY);
			context.drawImage(currentCanvas, 0, 0);
			context.restore();
		}
		return result;
	}
	return this;
};
