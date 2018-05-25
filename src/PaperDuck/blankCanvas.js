import PaperDuck from './index';

PaperDuck.blankCanvas = function(sizeX = 0, sizeY = 0) {
	let canvas  = this.createCanvas();
	canvas.width = sizeX;
	canvas.height = sizeY;
	return canvas;
};
