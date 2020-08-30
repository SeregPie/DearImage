import DearImage from '../core/DearImage';
import OffscreenCanvas_create from '../core/OffscreenCanvas/create';

DearImage.prototype.toOffscreenCanvas = function() {
	let {
		sizeX,
		sizeY,
	} = this;
	let canvas = OffscreenCanvas_create(sizeX, sizeY);
	if (sizeX && sizeY) {
		canvas.getContext('2d').drawImage(this.canvas, 0, 0);
	}
	return canvas;
};
