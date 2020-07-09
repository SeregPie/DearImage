import '../DearImage.prototype.crop';
import DearImage from '../DearImage';

import computeStartAndSize from './computeStartAndSize';

DearImage.prototype.reframe = function(sizeX, sizeY, alignmentX, alignmentY) {
	let startX;
	[
		startX,
		sizeX,
	] = computeStartAndSize(alignmentX, sizeX, this.sizeX);
	let startY;
	[
		startY,
		sizeY,
	] = computeStartAndSize(alignmentY, sizeY, this.sizeY);
	return this.crop(startX, startY, sizeX, sizeY);
};
