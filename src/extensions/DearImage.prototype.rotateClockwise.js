import './DearImage.prototype.rotate';

import DearImage from '../core/DearImage';

DearImage.prototype.rotateClockwise = function() {
	return this.rotate(+Math.PI/2);
};
