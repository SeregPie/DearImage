import '../DearImage.blank';

import DearImage from '../@core/DearImage';

import normalizeSize from './normalizeSize';
import normalizeStart from './normalizeStart';

DearImage.prototype.crop = function(startX, startY, sizeX, sizeY) {
	let {
		canvas: currentCanvas,
		sizeX: currentSizeX,
		sizeY: currentSizeY,
	} = this;
	[
		sizeX = currentSizeX,
		sizeY = currentSizeY,
		startX = 0,
		startY = 0,
	] = [
		normalizeSize(sizeX),
		normalizeSize(sizeY),
		normalizeStart(startX),
		normalizeStart(startY),
	];
	if (startY < 0) {
		startY += currentSizeY;
	}
	if (startX < 0) {
		startX += currentSizeX;
	}
	if (sizeY < 0) {
		startY += sizeY;
		sizeY *= -1;
	}
	if (sizeX < 0) {
		startX += sizeX;
		sizeX *= -1;
	}
	if (startX || startY || sizeX !== currentSizeX || sizeY !== currentSizeY) {
		let result = this.constructor.blank(sizeX, sizeY);
		if (sizeX && sizeY && currentSizeX && currentSizeY) {
			let {context} = result;
			context.drawImage(currentCanvas, -startX, -startY);
		}
		return result;
	}
	return this;
};
