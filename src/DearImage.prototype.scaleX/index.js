import '../DearImage.prototype.scale';
import DearImage from '../DearImage';

DearImage.prototype.scaleX = function(scalingX) {
	return this.scale(scalingX, 1);
};
