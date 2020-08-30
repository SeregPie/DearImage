import CanvasRenderingContext2D_create from '../../core/CanvasRenderingContext2D/create';
import DearImage from '../../core/DearImage';

import normalizeAngle from './normalizeAngle';

DearImage.prototype.rotate = function(angle) {
	let {
		canvas: currentCanvas,
		sizeX: currentSizeX,
		sizeY: currentSizeY,
	} = this;
	if (currentSizeX && currentSizeY) {
		angle = normalizeAngle(angle);
		if (angle) {
			let cosA = Math.abs(Math.cos(angle));
			let sinA = Math.abs(Math.sin(angle));
			let sizeX = Math.round(currentSizeX * cosA + currentSizeY * sinA);
			let sizeY = Math.round(currentSizeX * sinA + currentSizeY * cosA);
			let context = CanvasRenderingContext2D_create(sizeX, sizeY);
			context.save();
			context.translate(sizeX / 2, sizeY / 2);
			context.rotate(angle);
			context.drawImage(currentCanvas, -currentSizeX / 2, -currentSizeY / 2);
			context.restore();
			return new this.constructor(context);
		}
	}
	return this;
};
