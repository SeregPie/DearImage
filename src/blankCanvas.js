import PaperDuck_createCanvas from './createCanvas';

export default function(sizeX = 0, sizeY = 0) {
	let canvas  = PaperDuck_createCanvas();
	canvas.width = sizeX;
	canvas.height = sizeY;
	return canvas;
}
