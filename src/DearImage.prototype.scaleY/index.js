import '../DearImage.prototype.scale';
import DearImage from '../DearImage';

DearImage.prototype.scaleY = function(scalingY) {
	return this.scale(1, scalingY);
};
