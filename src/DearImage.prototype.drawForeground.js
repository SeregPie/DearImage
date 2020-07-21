import './DearImage.blank';
import './DearImage.fromExcept';
import DearImage from './DearImage';

import Function_prototype_bindPartial from './core/Function/prototype/bindPartial';

let f = function(b, image, alignmentX, alignmentY) {
	image = this.constructor.fromExcept(image);
	if (this.sizeX && this.sizeY && image.sizeX && image.sizeY) {
		let {canvas} = image.reframe(this.sizeX, this.sizeY, alignmentX, alignmentY);
		let result = this.constructor.blank(this.sizeX, this.sizeY);
		let {context} = result;
		if (b) {
			context.drawImage(this.canvas, 0, 0);
			context.drawImage(canvas, 0, 0);
		} else {
			context.drawImage(canvas, 0, 0);
			context.drawImage(this.canvas, 0, 0);
		}
		return result;
	}
	return this;
};

Object.assign(DearImage.prototype, {
	drawBackground: Function_prototype_bindPartial(f, false),
	drawForeground: Function_prototype_bindPartial(f, true),
});
