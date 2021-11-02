import '../DearImage.prototype.scale';
import DearImage from '../DearImage';

DearImage.prototype.scaleX = function(scaling) {
	return this.scale(scaling, 1);
};
