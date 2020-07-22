import '../DearImage.blank';
import DearImage from '../DearImage';

import computeScaling from './computeScaling';
import normalizeSize from './normalizeSize';

DearImage.prototype.resize = function(newSizeX, newSizeY) {
	let {
		canvas,
		sizeX: oldSizeX,
		sizeY: oldSizeY,
	} = this;
	newSizeX = normalizeSize(newSizeX, oldSizeX);
	newSizeY = normalizeSize(newSizeY, oldSizeY);
	if (newSizeX !== oldSizeX || newSizeY !== oldSizeY) {
		let result = this.constructor.blank(newSizeX, newSizeY);
		if (newSizeX && newSizeY && oldSizeX && oldSizeY) {
			let scalingX = computeScaling(newSizeX, oldSizeX);
			let scalingY = computeScaling(newSizeY, oldSizeY);
			let {context} = result;
			context.save();
			context.scale(scalingX, scalingY);
			context.drawImage(canvas, 0, 0);
			context.restore();
		}
		return result;
	}
	return this;
};
