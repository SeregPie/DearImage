import Function_partial from '/utils/Function/partial';

import PaperDuck from '../index';

let f = function(counterclockwise) {
	let width = this.height;
	let height = this.width;
	if (width === 0 || height === 0) {
		if (width === height) {
			return this;
		}
		return this.constructor.blank(width, height);
	}
	let currentCanvas = this.canvas;
	let context = this.constructor.blankContext(width, height);
	context.save();
	context.translate(width / 2, height / 2);
	context.rotate(Math.PI / (counterclockwise ? -2 : 2));
	context.drawImage(currentCanvas, height / -2, width / -2);
	context.restore();
	return new this.constructor(context);
};

PaperDuck.prototype.rotate90 = Function_partial(f, false);
PaperDuck.prototype.rotate270 = Function_partial(f, true);
