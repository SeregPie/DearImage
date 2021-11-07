import '../DearImage.prototype.rotate';
import DearImage from '../DearImage';

DearImage.prototype.rescale = function(scalingX, scalingY) {
	// todo: validate args
	let {
		height: currentSizeY,
		width: currentSizeX,
	} = this;
	// todo: round/ceil/floor?
	let sizeX = Math.round(currentSizeX * scalingX);
	let sizeY = Math.round(currentSizeY * scalingY);
	return this.resize(sizeX, sizeY);
};
