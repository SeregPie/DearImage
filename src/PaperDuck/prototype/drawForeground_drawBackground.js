import Function_partial from '/utils/Function/partial';

import PaperDuck from '../index';

let f = function(back, ground, align) {
	let sizeX = this.width;
	let sizeY = this.height;
	let groundSizeX = ground.width;
	let groundSizeY = ground.height;
	if (sizeX === 0 || sizeY === 0 || groundSizeX === 0 || groundSizeY === 0) {
		return this;
	}
	let groundCanvas = ground.clipAlign(sizeX, sizeY, align).canvas;
	let context = this.constructor.blankContext(sizeX, sizeY);
	if (back) {
		context.drawImage(groundCanvas, 0, 0);
		context.drawImage(this.canvas, 0, 0);
	} else {
		context.drawImage(this.canvas, 0, 0);
		context.drawImage(groundCanvas, 0, 0);
	}
	return new this.constructor(context);
};

PaperDuck.prototype.drawForeground = Function_partial(f, false);
PaperDuck.prototype.drawBackground = Function_partial(f, true);
