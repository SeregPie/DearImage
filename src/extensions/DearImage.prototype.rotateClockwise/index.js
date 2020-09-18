import '../DearImage.prototype.rotate';

import DearImage from '../../core/DearImage';

import delta from './delta';

DearImage.prototype.rotateClockwise = function() {
	return this.rotate(delta);
};
