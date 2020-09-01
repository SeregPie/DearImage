import DearImage from './DearImage';

import Canvas_createOffscreen from './core/Canvas/createOffscreen';

DearImage.prototype.toOffscreenCanvas = function() {
	let canvas = Canvas_createOffscreen();
	let {
		sizeX,
		sizeY,
	} = this;
	canvas.width = sizeX;
	canvas.height = sizeY;
	if (sizeX && sizeY) {
		canvas.getContext('2d').drawImage(this.canvas, 0, 0);
	}
	return canvas;
};
