import '../DearImage.blank';
import DearImage from '../DearImage';

import computeStartAndSize from './computeStartAndSize';

DearImage.prototype.crop = function(startX, startY, sizeX, sizeY) {
	[
		startX,
		sizeX,
	] = computeStartAndSize(startX, sizeX, this.sizeX);
	[
		startY,
		sizeY,
	] = computeStartAndSize(startY, sizeY, this.sizeY);
	if (startX || startY || sizeX !== this.sizeX || sizeY !== this.sizeY) {
		let image = this.constructor.blank(sizeX, sizeY);
		if (sizeX && sizeY && this.sizeX && this.sizeY) {
			image.context.drawImage(this.canvas, -startX, -startY);
		}
		return image;
	}
	return this;
};
