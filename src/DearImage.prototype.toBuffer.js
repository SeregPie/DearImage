import DearImage from './DearImage';

DearImage.prototype.toBuffer = function(...args) {
	if (this.sizeX && this.sizeY) {
		return this.canvas.toBuffer(...args);
	}
	return Buffer.alloc(0);
};
