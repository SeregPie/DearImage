import DearImage from '../DearImage';

DearImage.prototype.isEmpty = function() {
	let {
		sizeX,
		sizeY,
	} = this;
	return !(sizeX && sizeY);
};
