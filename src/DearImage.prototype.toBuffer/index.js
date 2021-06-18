import DearImage from '../DearImage';

DearImage.prototype.toBuffer = function(...args) {
	let {
		sizeX,
		sizeY,
	} = this;
	if (sizeX && sizeY) {
		let {canvas} = this;
		return canvas.toBuffer(...args);
	}
	return Buffer.alloc(0);
};
