import '../DearImage.prototype.resize';
import '../DearImage.prototype.scale';
import DearImage from '../DearImage';

DearImage.prototype.resizeY = function(sizeY, proportionally) {
	// todo: validate args
	let {
		height: currentSizeY,
		width: currentSizeX,
	} = this;
	if (proportionally) {
		let scaling = sizeY / currentSizeY;
		return this.scale(scaling);
	}
	return this.resize(currentSizeX, sizeY);
};
