import DearImage from '../DearImage';

DearImage.prototype.toBuffer = function(...args) {
	return this.canvas.toBuffer(...args);
};
