import DearImage from '../DearImage';

import createOffscreenCanvas from '../utils/createOffscreenCanvas';

DearImage.prototype.toOffscreenCanvas = function() {
	let {
		canvas,
		height,
		width,
	} = this;
	let result = createOffscreenCanvas(width, height);
	result.getContext('2d').drawImage(canvas, 0, 0);
	return result;
};
