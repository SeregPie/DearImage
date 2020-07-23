import './DearImage.prototype.drawForeground';
import './DearImage.filled';
import DearImage from './DearImage';

DearImage.prototype.fillForeground = function(style) {
	return this.drawForeground(this.constructor.filled(style, this.sizeX, this.sizeY));
};
