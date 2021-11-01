import '../DearImage.prototype.toImageData';
import DearImage from '../DearImage';

// todo: memoize

DearImage.prototype.isBlank = function() {
	return !this.toImageData().data.some((x) => x);
};
