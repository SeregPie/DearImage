import DearImage from './DearImage';

DearImage.prototype.toImageData = function() {
	return this.context.getImageData(0, 0, this.sizeX, this.sizeY);
};
