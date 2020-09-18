import '../DearImage.prototype.resize';

import DearImage from '../../core/DearImage';

import normalizeScaling from './normalizeScaling';

DearImage.prototype.rescale = function(scalingX, scalingY) {
	let {
		sizeX: currentSizeX,
		sizeY: currentSizeY,
	} = this;
	[
		scalingX = 1,
		scalingY = 1,
	] = [
		normalizeScaling(scalingX),
		normalizeScaling(scalingY),
	];
	let sizeX = currentSizeX * scalingX;
	let sizeY = currentSizeY * scalingY;
	return this.resize(sizeX, sizeY);
};
