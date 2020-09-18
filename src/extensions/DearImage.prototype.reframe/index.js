import '../DearImage.prototype.crop';

import DearImage from '../../core/DearImage';

import normalizeSize from './normalizeSize';
import normalizeAlignment from './normalizeAlignment';

DearImage.prototype.reframe = function(sizeX, sizeY, alignmentX, alignmentY) {
	let {
		sizeX: currentSizeX,
		sizeY: currentSizeY,
	} = this;
	[
		alignmentX,
		alignmentY,
		sizeX = currentSizeX,
		sizeY = currentSizeY,
	] = [
		normalizeAlignment(alignmentX),
		normalizeAlignment(alignmentY),
		normalizeSize(sizeX),
		normalizeSize(sizeY),
	];
	let startX = (() => {
		switch (alignmentX) {
			case 'start':
				return 0;
			case 'end':
				return -sizeX;
		}
		return (currentSizeX + sizeX) / -2;
	})();
	let startY = (() => {
		switch (alignmentY) {
			case 'start':
				return 0;
			case 'end':
				return -sizeY;
		}
		return (currentSizeY + sizeY) / -2;
	})();
	return this.crop(startX, startY, sizeX, sizeY);
};
