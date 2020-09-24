import '../DearImage.prototype.rescale';

import DearImage from '../@core/DearImage';

DearImage.prototype.scale = function(scaling) {
	return this.rescale(scaling, scaling);
};
