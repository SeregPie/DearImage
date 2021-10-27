import DearImage from '../DearImage';

import createOffscreenCanvas from '../utils/createOffscreenCanvas';

DearImage.prototype.toOffscreenCanvas = function() {
	let {
		sizeX,
		sizeY,
	} = this;
	let result = createOffscreenCanvas(sizeX, sizeY);
	if (sizeX && sizeY) {
		let {canvas} = this;
		result.getContext('2d').drawImage(canvas, 0, 0);
	}
	return result;
};
