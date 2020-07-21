import './DearImage.blank';
import DearImage from './DearImage';

import Function_prototype_bindPartial from './core/Function/prototype/bindPartial';

let f = function(clockwise) {
	if (this.sizeX || this.sizeY) {
		let result = this.constructor.blank(this.sizeY, this.sizeX);
		if (this.sizeX && this.sizeY) {
			let {context} = result;
			context.save();
			context.translate(this.sizeY / 2, this.sizeX / 2);
			context.rotate(Math.PI / (clockwise ? 2 : -2));
			context.drawImage(this.canvas, this.sizeX / -2, this.sizeY / -2);
			context.restore();
		}
		return result;
	}
	return this;
};

Object.assign(DearImage.prototype, {
	rotateClockwise: Function_prototype_bindPartial(f, true),
	rotateCounterClockwise: Function_prototype_bindPartial(f, false),
});
