import '../DearImage.blank';

import DearImage from '../@core/DearImage';

import normalizeAngle from './normalizeAngle';

DearImage.prototype.rotate = function(angle) {
	let {
		canvas: currentCanvas,
		sizeX: currentSizeX,
		sizeY: currentSizeY,
	} = this;
	{
		angle = normalizeAngle(angle);
	}
	if (angle && currentSizeX && currentSizeY) {
		let cosA = Math.abs(Math.cos(angle));
		let sinA = Math.abs(Math.sin(angle));
		let sizeX = Math.round(currentSizeX * cosA + currentSizeY * sinA);
		let sizeY = Math.round(currentSizeX * sinA + currentSizeY * cosA);
		let result = this.constructor.blank(sizeX, sizeY);
		let {context} = result;
		context.save();
		context.translate(sizeX / 2, sizeY / 2);
		context.rotate(angle);
		context.drawImage(currentCanvas, -currentSizeX / 2, -currentSizeY / 2);
		context.restore();
		return result;
	}
	return this;
};
