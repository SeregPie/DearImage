import '../DearImage.prototype.resize';
import '../DearImage.prototype.scale';
import DearImage from '../DearImage';

import computeScaling from './computeScaling';
import normalizeSize from './normalizeSize';

DearImage.prototype.resizeX = function(newSizeX, proportionally) {
	let {
		sizeX: oldSizeX,
		sizeY: oldSizeY,
	} = this;
	newSizeX = normalizeSize(newSizeX, oldSizeX);
	if (proportionally) {
		let scaling = computeScaling(newSizeX, oldSizeX);
		return this.scale(scaling);
	}
	return this.resize(newSizeX, oldSizeY);
};
