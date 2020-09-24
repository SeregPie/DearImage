import DearImage from '../@core/DearImage';

import '../DearImage.prototype.toImageData';

DearImage.prototype.isBlank = function() {
	let {
		sizeX,
		sizeY,
	} = this;
	return !(sizeX && sizeY && this.toImageData().data.some(x => x));
};
