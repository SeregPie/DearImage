import DearImage from '../@core/DearImage';

import '../DearImage.prototype.resize';

import normalizeScaling from './normalizeScaling';

DearImage.prototype.rescale = function(scalingX, scalingY) {
	let {
		sizeX: currentSizeX,
		sizeY: currentSizeY,
	} = this;
	{
		scalingX = normalizeScaling(scalingX);
		scalingY = normalizeScaling(scalingY);
	}
	let sizeX = currentSizeX * scalingX;
	let sizeY = currentSizeY * scalingY;
	return this.resize(sizeX, sizeY);
};
