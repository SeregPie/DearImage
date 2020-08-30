import '../DearImage.prototype.resize';

import DearImage from '../../core/DearImage';

import computeSize from './computeSize';

DearImage.prototype.rescale = function(scalingX, scalingY) {
	let {
		sizeX: currentSizeX,
		sizeY: currentSizeY,
	} = this;
	let sizeX = computeSize(scalingX, currentSizeX);
	let sizeY = computeSize(scalingY, currentSizeY);
	return this.resize(sizeX, sizeY);
};
