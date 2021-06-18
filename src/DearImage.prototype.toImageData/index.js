import DearImage from '../DearImage';

DearImage.prototype.toImageData = function() {
	let {
		context,
		sizeX,
		sizeY,
	} = this;
	return context.getImageData(0, 0, sizeX, sizeY);
};
