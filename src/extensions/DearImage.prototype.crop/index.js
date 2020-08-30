import CanvasRenderingContext2D_create from '../../core/CanvasRenderingContext2D/create';
import DearImage from '../../core/DearImage';

import computeStartAndSize from './computeStartAndSize';

DearImage.prototype.crop = function(startX, startY, sizeX, sizeY) {
	let {
		canvas: currentCanvas,
		sizeX: currentSizeX,
		sizeY: currentSizeY,
	} = this;
	[
		startX,
		sizeX,
	] = computeStartAndSize(startX, sizeX, currentSizeX);
	[
		startY,
		sizeY,
	] = computeStartAndSize(startY, sizeY, currentSizeY);
	if (startX || startY || sizeX !== currentSizeX || sizeY !== currentSizeY) {
		let context = CanvasRenderingContext2D_create(sizeX, sizeY);
		if (sizeX && sizeY && currentSizeX && currentSizeY) {
			context.drawImage(currentCanvas, -startX, -startY);
		}
		return new this.constructor(context);
	}
	return this;
};
