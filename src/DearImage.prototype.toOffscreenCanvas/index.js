import DearImage from '../DearImage';

import createOffscreenCanvas from '../utils/createOffscreenCanvas';

DearImage.prototype.toOffscreenCanvas = function() {
	let {
		canvas,
		sizeX,
		sizeY,
	} = this;
	let result = createOffscreenCanvas(sizeX, sizeY);
	result.getContext('2d').drawImage(canvas, 0, 0);
	return result;
};
