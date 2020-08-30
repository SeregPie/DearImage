import '../DearImage.prototype.crop';

import DearImage from '../../core/DearImage';

import computeStartAndSize from './computeStartAndSize';

DearImage.prototype.reframe = function(sizeX, sizeY, alignmentX, alignmentY) {
	let {
		sizeX: currentSizeX,
		sizeY: currentSizeY,
	} = this;
	let startX;
	let startY;
	[
		startX,
		sizeX,
	] = computeStartAndSize(alignmentX, sizeX, currentSizeX);
	[
		startY,
		sizeY,
	] = computeStartAndSize(alignmentY, sizeY, currentSizeY);
	return this.crop(startX, startY, sizeX, sizeY);
};
