import './DearImage.blank';
import DearImage from './DearImage';

import Function_prototype_bindPartial from './core/Function/prototype/bindPartial';

let f = function(x, y) {
	let {
		canvas,
		sizeX,
		sizeY,
	} = this;
	if (sizeX && sizeY) {
		let result = this.constructor.blank(sizeX, sizeY);
		let {context} = result;
		context.save();
		context.translate(x ? sizeX : 0, y ? sizeY : 0);
		context.scale(x ? -1 : +1, y ? -1 : +1);
		context.drawImage(canvas, 0, 0);
		context.restore();
		return result;
	}
	return this;
};

Object.assign(DearImage.prototype, {
	flipX: Function_prototype_bindPartial(f, true, false),
	flipY: Function_prototype_bindPartial(f, false, true),
});
