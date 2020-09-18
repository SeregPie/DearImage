import '../DearImage.prototype.reframe';
import '../DearImage.prototype.scaleIn';

import DearImage from '../../core/DearImage';

import normalizeSize from './normalizeSize';

DearImage.prototype.reframeScaleIn = function(sizeX, sizeY, alignmentX, alignmentY) {
	let {
		sizeX: currentSizeX,
		sizeY: currentSizeY,
	} = this;
	[
		sizeX = currentSizeX,
		sizeY = currentSizeY,
	] = [
		normalizeSize(sizeX),
		normalizeSize(sizeY),
	];
	return this.scaleIn(sizeX, sizeY).reframe(sizeX, sizeY, alignmentX, alignmentY);
};
