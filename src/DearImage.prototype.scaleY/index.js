import '../DearImage.prototype.scale';
import DearImage from '../DearImage';

DearImage.prototype.scaleY = function(scaling) {
	return this.scale(1, scaling);
};
