import '../DearImage.blank';
import DearImage from '../DearImage';

import normalizeSize from './normalizeSize';

DearImage.prototype.resize = function(sizeX, sizeY) {
	sizeX = normalizeSize(sizeX, this.sizeX);
	sizeY = normalizeSize(sizeY, this.sizeY);
	if (sizeX !== this.sizeX || sizeY !== this.sizeY) {
		let result = this.constructor.blank(sizeX, sizeY);
		if (sizeX && sizeY && this.sizeX && this.sizeY) {
			let scalingX = sizeX / this.sizeX;
			let scalingY = sizeY / this.sizeY;
			let {context} = result;
			context.save();
			context.scale(scalingX, scalingY);
			context.drawImage(this.canvas, 0, 0);
			context.restore();
		}
		return result;
	}
	return this;
};
