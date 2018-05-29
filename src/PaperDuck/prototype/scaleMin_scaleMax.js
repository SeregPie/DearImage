import Function_partial from '/utils/Function/partial';
import Lang_isUndefined from '/utils/Number/isNumber';

import PaperDuck from '../index';

let f = function(getFactor, width, height, smoothing) {
	let currentWidth = this.width;
	let currentHeight = this.height;
	if (currentWidth === 0 || currentHeight === 0) {
		return this.constructor.blank(width, height);
	}
	if (Lang_isUndefined(width)) {
		width = currentWidth;
	}
	if (Lang_isUndefined(height)) {
		height = currentHeight;
	}
	let factorWidth = width / currentWidth;
	let factorHeight = height / currentHeight;
	let factor = getFactor(factorWidth, factorHeight);
	return this.scale(factor, smoothing);
};

PaperDuck.prototype.scaleMin = Function_partial(f, Math.min);
PaperDuck.prototype.scaleMax = Function_partial(f, Math.max);
