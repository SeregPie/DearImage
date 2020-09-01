import './DearImage.prototype.drawBackground';
import './DearImage.filled';
import DearImage from './DearImage';

DearImage.prototype.fillBackground = function(style) {
	return this.drawBackground(this.constructor.filled(style, this.sizeX, this.sizeY));
};
