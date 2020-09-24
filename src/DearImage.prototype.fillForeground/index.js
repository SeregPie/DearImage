import '../DearImage.filled';
import '../DearImage.prototype.drawForeground';

import DearImage from '../@core/DearImage';

DearImage.prototype.fillForeground = function(style) {
	let {
		sizeX,
		sizeY,
	} = this;
	return this.drawForeground(this.constructor.filled(style, sizeX, sizeY));
};
