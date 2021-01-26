import DearImage from '../@core/DearImage';

import '../DearImage.prototype.reframe';
import '../DearImage.prototype.scaleIn';

import normalizeSize from './normalizeSize';

DearImage.prototype.reframeScaleIn = function(sizeX, sizeY, alignmentX, alignmentY) {
	let {
		sizeX: currentSizeX,
		sizeY: currentSizeY,
	} = this;
	sizeX = normalizeSize(sizeX, currentSizeX);
	sizeY = normalizeSize(sizeY, currentSizeY);
	return this.scaleIn(sizeX, sizeY).reframe(sizeX, sizeY, alignmentX, alignmentY);
};
