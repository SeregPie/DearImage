import './DearImage.prototype.rotate';
import DearImage from './DearImage';

DearImage.prototype.rotateClockwise = function() {
	return this.rotate(+Math.PI/2);
};
