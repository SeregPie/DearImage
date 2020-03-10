import './DearImage.blank';
import DearImage from './DearImage';

import Function_prototype_bindPartial from './core/Function/prototype/bindPartial';

let f = function(flippingX, flippingY) {
	let {
		sizeX,
		sizeY,
	} = this;
	if (sizeX && sizeY) {
		let image = this.constructor.blank(sizeX, sizeY);
		let {context} = image;
		context.save();
		context.translate(flippingX ? sizeX : 0, flippingY ? sizeY : 0);
		context.scale(flippingX ? -1 : 1, flippingY ? -1 : 1);
		context.drawImage(this.canvas, 0, 0);
		context.restore();
		return image;
	}
	return this;
};

Object.assign(DearImage.prototype, {
	flipX: Function_prototype_bindPartial(f, true, false),
	flipY: Function_prototype_bindPartial(f, false, true),
});
