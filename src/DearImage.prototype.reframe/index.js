import '../DearImage.prototype.crop';
import DearImage from '../DearImage';

import computeStart from './computeStart';
import normalizeSize from './normalizeSize';

DearImage.prototype.reframe = function(newSizeX, newSizeY, alignmentX, alignmentY) {
	let {
		sizeX: oldSizeX,
		sizeY: oldSizeY,
	} = this;
	newSizeX = normalizeSize(newSizeX, oldSizeX);
	newSizeY = normalizeSize(newSizeY, oldSizeY);
	let startX = computeStart(alignmentX, newSizeX, oldSizeX);
	let startY = computeStart(alignmentY, newSizeY, oldSizeY);
	return this.crop(startX, startY, newSizeX, newSizeY);
};
