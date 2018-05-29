import PaperDuck from './index';

PaperDuck.blankCanvas = function(width = 0, height = 0) {
	let canvas  = this.createCanvas();
	canvas.width = width;
	canvas.height = height;
	return canvas;
};
