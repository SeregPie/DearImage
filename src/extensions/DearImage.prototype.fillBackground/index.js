import '../DearImage.filled';
import '../DearImage.prototype.drawBackground';

import DearImage from '../../core/DearImage';

DearImage.prototype.fillBackground = function(style) {
	let {
		sizeX,
		sizeY,
	} = this;
	return this.drawBackground(this.constructor.filled(style, sizeX, sizeY));
};
