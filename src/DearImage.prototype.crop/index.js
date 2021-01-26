import DearImage from '../@core/DearImage';

import '../DearImage.blank';

import normalizeSize from './normalizeSize';
import normalizeStart from './normalizeStart';

DearImage.prototype.crop = function(startX, startY, sizeX, sizeY) {
	let {
		canvas: currentCanvas,
		sizeX: currentSizeX,
		sizeY: currentSizeY,
	} = this;
	{
		startX = normalizeStart(startX);
		startY = normalizeStart(startY);
		sizeX = normalizeSize(sizeX, currentSizeX);
		sizeY = normalizeSize(sizeY, currentSizeY);
	}
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
