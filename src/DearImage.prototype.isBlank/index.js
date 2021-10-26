import '../DearImage.prototype.toImageData';
import DearImage from '../DearImage';

// todo: memoize

DearImage.prototype.isBlank = function() {
	let {
		sizeX,
		sizeY,
	} = this;
	return !(sizeX && sizeY && this.toImageData().data.some(x => x));
};
