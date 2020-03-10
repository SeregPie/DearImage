import './DearImage.blank';
import DearImage from './DearImage';

DearImage.prototype.crop = function(startX, startY, sizeX, sizeY) {
	if (Number.isFinite(startX)) {
		startX = Math.round(startX);
		if (startX < 0) {
			startX += this.sizeX;
		}
	} else {
		startX = 0;
	}
	if (Number.isFinite(startY)) {
		startY = Math.round(startY);
		if (startY < 0) {
			startY += this.sizeY;
		}
	} else {
		startY = 0;
	}
	if (Number.isFinite(sizeX)) {
		sizeX = Math.round(sizeX);
		if (sizeX < 0) {
			startX += sizeX;
			sizeX *= -1;
		}
	} else {
		({sizeX} = this);
	}
	if (Number.isFinite(sizeY)) {
		sizeY = Math.round(sizeY);
		if (sizeY < 0) {
			startY += sizeY;
			sizeY *= -1;
		}
	} else {
		({sizeY} = this);
	}
	if (startX || startY || sizeX !== this.sizeX || sizeY !== this.sizeY) {
		let image = this.constructor.blank(sizeX, sizeY);
		if (sizeX && sizeY && this.sizeX && this.sizeY) {
			image.context.drawImage(this.canvas, -startX, -startY);
		}
		return image;
	}
	return this;
};
