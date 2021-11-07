import '../DearImage.prototype.resize';
import '../DearImage.prototype.scale';
import DearImage from '../DearImage';

DearImage.prototype.resizeX = function(sizeX, proportionally) {
	// todo: validate args
	let {
		height: currentSizeY,
		width: currentSizeX,
	} = this;
	if (proportionally) {
		let scaling = sizeX / currentSizeX;
		return this.scale(scaling);
	}
	return this.resize(sizeX, currentSizeY);
};
