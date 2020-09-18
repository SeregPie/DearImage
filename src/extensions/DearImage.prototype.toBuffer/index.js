import DearImage from '../../core/DearImage';

DearImage.prototype.toBuffer = function(...args) {
	let {
		canvas,
		sizeX,
		sizeY,
	} = this;
	if (sizeX && sizeY) {
		return canvas.toBuffer(...args);
	}
	return Buffer.alloc(0);
};
