import '../DearImage.prototype.resize';
import '../DearImage.prototype.scale';
import DearImage from '../DearImage';

import computeScaling from './computeScaling';

DearImage.prototype.resizeX = function(sizeX, proportionally) {
	if (proportionally) {
		let scaling = computeScaling(sizeX, this.sizeX);
		return this.scale(scaling);
	}
	return this.resize(sizeX, this.sizeY);
};
