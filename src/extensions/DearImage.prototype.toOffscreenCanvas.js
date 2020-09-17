import DearImage from '../core/DearImage';
import OffscreenCanvas_create from '../core/OffscreenCanvas/create';

DearImage.prototype.toOffscreenCanvas = function() {
	let {
		canvas,
		sizeX,
		sizeY,
	} = this;
	let result = OffscreenCanvas_create(sizeX, sizeY);
	if (sizeX && sizeY) {
		result.getContext('2d').drawImage(canvas, 0, 0);
	}
	return result;
};
