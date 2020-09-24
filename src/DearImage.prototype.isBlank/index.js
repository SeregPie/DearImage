import '../DearImage.prototype.toImageData';

import DearImage from '../@core/DearImage';

DearImage.prototype.isBlank = function() {
	let {
		sizeX,
		sizeY,
	} = this;
	return !(sizeX && sizeY && this.toImageData().data.some(x => x));
};
