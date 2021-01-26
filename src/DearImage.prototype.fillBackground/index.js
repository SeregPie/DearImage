import DearImage from '../@core/DearImage';

import '../DearImage.fill';
import '../DearImage.prototype.drawBackground';

DearImage.prototype.fillBackground = function(style) {
	let {
		sizeX,
		sizeY,
	} = this;
	return this.drawBackground(this.constructor.fill(style, sizeX, sizeY));
};
