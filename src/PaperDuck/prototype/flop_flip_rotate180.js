import Function_partial from '/utils/Function/partial';

import PaperDuck from '../index';

let f = function(flop, flip) {
	let sizeX = this.width;
	let sizeY = this.height;
	if (sizeX === 0 || sizeY === 0) {
		return this;
	}
	let context = this.constructor.blankContext(sizeX, sizeY);
	context.save();
	context.translate(flop ? sizeX : 0, flip ? sizeY : 0);
	context.scale(flop ? -1 : 1, flip ? -1 : 1);
	context.drawImage(this.canvas, 0, 0);
	context.restore();
	return new this.constructor(context);
};

PaperDuck.prototype.flop = Function_partial(f, true, false);
PaperDuck.prototype.flip = Function_partial(f, false, true);
PaperDuck.prototype.rotate180 =  Function_partial(f, true, true);
