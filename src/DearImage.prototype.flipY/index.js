import '../DearImage.prototype.flip';
import DearImage from '../DearImage';

DearImage.prototype.flipY = function() {
	return this.flip(false, true);
};
