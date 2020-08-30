import CanvasRenderingContext2D_create from '../../core/CanvasRenderingContext2D/create';
import DearImage from '../../core/DearImage';

import normalizeSize from './normalizeSize';

DearImage.prototype.resize = function(sizeX, sizeY) {
	let {
		canvas: currentCanvas,
		sizeX: currentSizeX,
		sizeY: currentSizeY,
	} = this;
	sizeX = normalizeSize(sizeX, currentSizeX);
	sizeY = normalizeSize(sizeY, currentSizeY);
	if (sizeX !== currentSizeX || sizeY !== currentSizeY) {
		let context = CanvasRenderingContext2D_create(sizeX, sizeY);
		if (sizeX && sizeY && currentSizeX && currentSizeY) {
			let scalingX = sizeX / currentSizeX;
			let scalingY = sizeY / currentSizeY;
			context.save();
			context.scale(scalingX, scalingY);
			context.drawImage(currentCanvas, 0, 0);
			context.restore();
		}
		return new this.constructor(context);
	}
	return this;
};
