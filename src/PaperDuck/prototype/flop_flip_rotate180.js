import Function_partial from '/utils/Function/partial';

import PaperDuck from '../index';

let f = function(flop, flip) {
	let width = this.width;
	let height = this.height;
	if (width === 0 || height === 0) {
		return this;
	}
	let currentCanvas = this.canvas;
	let context = this.constructor.blankContext(width, height);
	context.save();
	context.translate(flop ? width : 0, flip ? height : 0);
	context.scale(flop ? -1 : 1, flip ? -1 : 1);
	context.drawImage(currentCanvas, 0, 0);
	context.restore();
	return new this.constructor(context);
};

PaperDuck.prototype.flop = Function_partial(f, true, false);
PaperDuck.prototype.flip = Function_partial(f, false, true);
PaperDuck.prototype.rotate180 =  Function_partial(f, true, true);
