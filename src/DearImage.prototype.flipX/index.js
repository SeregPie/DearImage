import '../DearImage.prototype.flip';
import DearImage from '../DearImage';

DearImage.prototype.flipX = function() {
	return this.flip(true, false);
};
