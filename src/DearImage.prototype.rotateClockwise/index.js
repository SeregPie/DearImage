import DearImage from '../@core/DearImage';

import '../DearImage.prototype.rotate';

import delta from './delta';

DearImage.prototype.rotateClockwise = function() {
	return this.rotate(delta);
};
