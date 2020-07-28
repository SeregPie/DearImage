// todo

import './DearImage.prototype.reframe';
import './DearImage.prototype.scaleIn';
import DearImage from './DearImage';

DearImage.prototype.reframeScaleIn = function(sizeX, sizeY, alignmentX, alignmentY) {
	return this.scaleIn(sizeX, sizeY).reframe(sizeX, sizeY, alignmentX, alignmentY);
};
