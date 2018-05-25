import Function_partial from '/utils/Function/partial';

import PaperDuck from '../index';

let f = function(flop, flip) {
	let sizeX = this.width;
	let sizeY = this.height;
	if (sizeX === 0 || sizeY === 0) {
		return this;
	}
	let ctx = this.constructor.blankContext(sizeX, sizeY);
	ctx.translate(
		flop ? sizeX : 0,
		flip ? sizeY : 0,
	);
	ctx.scale(
		flop ? -1 : 1,
		flip ? -1 : 1,
	);
	ctx.drawImage(this.canvas, 0, 0);
	return new this.constructor(ctx);
};

PaperDuck.prototype.flop = Function_partial(f, true, false);
PaperDuck.prototype.flip = Function_partial(f, false, true);
PaperDuck.prototype.rotate180 =  Function_partial(f, true, true);
