import './DearImage.blank';
import DearImage from './DearImage';

import Number_isNonNegativeFinite from './core/Number/isNonNegativeFinite';

DearImage.prototype.resize = function(sizeX, sizeY) {
	if (Number_isNonNegativeFinite(sizeX)) {
		sizeX = Math.round(sizeX);
	} else {
		({sizeX} = this);
	}
	if (Number_isNonNegativeFinite(sizeY)) {
		sizeY = Math.round(sizeY);
	} else {
		({sizeY} = this);
	}
	if (sizeX !== this.sizeX || sizeY !== this.sizeY) {
		let image = this.constructor.blank(sizeX, sizeY);
		if (sizeX && sizeY && this.sizeX && this.sizeY) {
			let scalingX = sizeX / this.sizeX;
			let scalingY = sizeY / this.sizeY;
			let {context} = image;
			context.save();
			context.scale(scalingX, scalingY);
			context.drawImage(this.canvas, 0, 0);
			context.restore();
		}
		return image;
	}
	return this;
};
