import './DearImage.prototype.drawBackground';
import './DearImage.solid';
import DearImage from './DearImage';

DearImage.prototype.fillBackground = function(fill) {
	return this.drawBackground(this.constructor.solid(fill, this.sizeX, this.sizeY));
};
