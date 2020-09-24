import DearImage from '../@core/DearImage';

import '../DearImage.prototype.rescale';

DearImage.prototype.scale = function(scaling) {
	return this.rescale(scaling, scaling);
};
