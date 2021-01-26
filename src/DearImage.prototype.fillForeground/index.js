import DearImage from '../@core/DearImage';

import '../DearImage.fill';
import '../DearImage.prototype.drawForeground';

DearImage.prototype.fillForeground = function(style) {
	let {
		sizeX,
		sizeY,
	} = this;
	return this.drawForeground(this.constructor.fill(style, sizeX, sizeY));
};
