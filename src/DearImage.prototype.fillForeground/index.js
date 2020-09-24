import DearImage from '../@core/DearImage';

import '../DearImage.filled';
import '../DearImage.prototype.drawForeground';

DearImage.prototype.fillForeground = function(style) {
	let {
		sizeX,
		sizeY,
	} = this;
	return this.drawForeground(this.constructor.filled(style, sizeX, sizeY));
};
