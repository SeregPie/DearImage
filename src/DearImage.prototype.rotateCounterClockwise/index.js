import DearImage from '../@core/DearImage';

import '../DearImage.prototype.rotate';

import delta from './delta';

DearImage.prototype.rotateCounterClockwise = function() {
	return this.rotate(delta);
};
