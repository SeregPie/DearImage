import DearImage from '../@core/DearImage';

import '../DearImage.prototype.resize';
import '../DearImage.prototype.scale';

import normalizeSize from './normalizeSize';

DearImage.prototype.resizeY = function(sizeY, proportionally) {
	let {
		sizeX: currentSizeX,
		sizeY: currentSizeY,
	} = this;
	{
		sizeY = normalizeSize(sizeY, currentSizeY);
	}
	if (proportionally) {
		let scaling = sizeY / currentSizeY;
		return this.scale(scaling);
	}
	return this.resize(currentSizeX, sizeY);
};
