import DearImage from '../DearImage';

DearImage.prototype.toImageData = function() {
	let {
		context,
		height,
		width,
	} = this;
	return context.getImageData(0, 0, width, height);
};
