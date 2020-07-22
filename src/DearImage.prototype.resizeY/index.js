import '../DearImage.prototype.resize';
import '../DearImage.prototype.scale';
import DearImage from '../DearImage';

import computeScaling from './computeScaling';
import normalizeSize from './normalizeSize';

DearImage.prototype.resizeY = function(newSizeY, proportionally) {
	let {
		sizeX: oldSizeX,
		sizeY: oldSizeY,
	} = this;
	newSizeY = normalizeSize(newSizeY, oldSizeY);
	if (proportionally) {
		let scaling = computeScaling(newSizeY, oldSizeY);
		return this.scale(scaling);
	}
	return this.resize(oldSizeX, newSizeY);
};
