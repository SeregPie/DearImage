import Function_partial from '/utils/Function/partial';

import PaperDuck from '../index';

let f = function(back, ground, align) {
	let width = this.width;
	let height = this.height;
	let groundWidth = ground.width;
	let groundHeight = ground.height;
	if (width === 0 || height === 0 || groundWidth === 0 || groundHeight === 0) {
		return this;
	}
	let groundCanvas = ground.clipAlign(width, height, align).canvas;
	let currentCanvas = this.canvas;
	let context = this.constructor.blankContext(width, height);
	if (back) {
		context.drawImage(groundCanvas, 0, 0);
		context.drawImage(currentCanvas, 0, 0);
	} else {
		context.drawImage(currentCanvas, 0, 0);
		context.drawImage(groundCanvas, 0, 0);
	}
	return new this.constructor(context);
};

PaperDuck.prototype.drawForeground = Function_partial(f, false);
PaperDuck.prototype.drawBackground = Function_partial(f, true);
