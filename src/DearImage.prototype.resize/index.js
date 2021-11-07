import '../DearImage.blank';
import DearImage from '../DearImage';

DearImage.prototype.resize = function(sizeX, sizeY) {
	// todo: validate args
	let {
		canvas: currentCanvas,
		height: currentSizeY,
		width: currentSizeX,
	} = this;
	if (sizeX !== currentSizeX || sizeY !== currentSizeY) {
		let result = this.constructor.blank(sizeX, sizeY);
		let scalingX = sizeX / currentSizeX;
		let scalingY = sizeY / currentSizeY;
		let {context} = result;
		context.save();
		context.scale(scalingX, scalingY);
		context.drawImage(currentCanvas, 0, 0);
		context.restore();
	}
	return this;
};
