import './DearImage.prototype.rotate';
import DearImage from './DearImage';

DearImage.prototype.rotateCounterClockwise = function() {
	return this.rotate(-Math.PI/2);
};
