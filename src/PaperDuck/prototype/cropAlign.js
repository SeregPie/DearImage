import Lang_isUndefined from '/utils/Lang/isUndefined';

import PaperDuck from '../index';

PaperDuck.prototype.cropAlign = function(sizeX, sizeY, align) {
	return this.scaleMax(sizeX, sizeY, smoothing).cropAlign(sizeX, sizeY, align);
};
