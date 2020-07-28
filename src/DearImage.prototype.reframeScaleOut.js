// todo

import './DearImage.prototype.reframe';
import './DearImage.prototype.scaleOut';
import DearImage from './DearImage';

DearImage.prototype.reframeScaleOut = function(sizeX, sizeY, alignmentX, alignmentY) {
	return this.scaleOut(sizeX, sizeY).reframe(sizeX, sizeY, alignmentX, alignmentY);
};
