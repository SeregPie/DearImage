import '../DearImage.prototype.resize';
import '../DearImage.prototype.scale';
import DearImage from '../DearImage';

import computeScaling from './computeScaling';

DearImage.prototype.resizeY = function(sizeY, proportionally) {
	if (proportionally) {
		let scaling = computeScaling(sizeY, this.sizeY);
		return this.scale(scaling);
	}
	return this.resize(this.sizeX, sizeY);
};
