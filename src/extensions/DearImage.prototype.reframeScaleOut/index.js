import '../DearImage.prototype.reframe';
import '../DearImage.prototype.scaleOut';

import DearImage from '../../core/DearImage';

import normalizeSize from './normalizeSize';

DearImage.prototype.reframeScaleOut = function(sizeX, sizeY, alignmentX, alignmentY) {
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
	return this.scaleOut(sizeX, sizeY).reframe(sizeX, sizeY, alignmentX, alignmentY);
};
