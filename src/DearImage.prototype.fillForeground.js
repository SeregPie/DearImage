import './DearImage.prototype.drawForeground';
import './DearImage.solid';
import DearImage from './DearImage';

DearImage.prototype.fillForeground = function(fill) {
	return this.drawForeground(this.constructor.solid(fill, this.sizeX, this.sizeY));
};
