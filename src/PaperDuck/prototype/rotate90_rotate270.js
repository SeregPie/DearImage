import Function_partial from '/utils/Function/partial';

import PaperDuck from '../index';

let f = function(counterclockwise) {
	let sizeX = this.height;
	let sizeY = this.width;
	if (sizeX === 0 || sizeY === 0) {
		if (sizeX === sizeY) {
			return this;
		}
		return this.constructor.blank(sizeX, sizeY);
	}
	let context = this.constructor.blankContext(sizeX, sizeY);
	context.save();
	context.translate(sizeX / 2, sizeY / 2);
	context.rotate(Math.PI / (counterclockwise ? -2 : 2));
	context.drawImage(this.canvas, sizeY / -2, sizeX / -2);
	context.restore();
	return new this.constructor(context);
};

PaperDuck.prototype.rotate90 = Function_partial(f, false);
PaperDuck.prototype.rotate270 = Function_partial(f, true);
