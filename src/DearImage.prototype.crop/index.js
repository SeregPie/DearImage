import '../DearImage.blank';
import DearImage from '../DearImage';

import computeStartAndSize from './computeStartAndSize';

DearImage.prototype.crop = function(startX, startY, newSizeX, newSizeY) {
	let {
		canvas,
		sizeX: oldSizeX,
		sizeY: oldSizeY,
	} = this;
	[
		startX,
		newSizeX,
	] = computeStartAndSize(startX, newSizeX, oldSizeX);
	[
		startY,
		newSizeY,
	] = computeStartAndSize(startY, newSizeY, oldSizeY);
	if (startX || startY || newSizeX !== oldSizeX || newSizeY !== oldSizeY) {
		let result = this.constructor.blank(newSizeX, newSizeY);
		if (newSizeX && newSizeY && oldSizeX && oldSizeY) {
			result.context.drawImage(canvas, -startX, -startY);
		}
		return result;
	}
	return this;
};
