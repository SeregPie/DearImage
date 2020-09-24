import DearImage from '../@core/DearImage';

import '../DearImage.prototype.resize';
import '../DearImage.prototype.scale';

import normalizeSize from './normalizeSize';

DearImage.prototype.resizeX = function(sizeX, proportionally) {
	let {
		sizeX: currentSizeX,
		sizeY: currentSizeY,
	} = this;
	{
		sizeX = normalizeSize(sizeX, currentSizeX);
	}
	if (proportionally) {
		let scaling = sizeX / currentSizeX;
		return this.scale(scaling);
	}
	return this.resize(sizeX, currentSizeY);
};
