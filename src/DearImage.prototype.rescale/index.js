import '../DearImage.prototype.resize';
import DearImage from '../DearImage';

import computeSize from './computeSize';

DearImage.prototype.rescale = function(scalingX, scalingY) {
	let {
		sizeX,
		sizeY,
	} = this;
	sizeX = computeSize(scalingX, sizeX);
	sizeY = computeSize(scalingY, sizeY);
	return this.resize(sizeX, sizeY);
};
