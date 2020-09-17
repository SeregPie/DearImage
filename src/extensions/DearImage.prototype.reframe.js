import './DearImage.prototype.crop';

import DearImage from '../core/DearImage';
import Number_isNonNegativeFinite from '../core/Number/isNonNegativeFinite';
import String_is from '../core/String/is';

let normalizeSize = function(value) {
	value = Number(value);
	if (Number_isNonNegativeFinite(value)) {
		return Math.round(value);
	}
};
let normalizeAlignment = function(value) {
	if (String_is(value)) {
		return value.trim().toLowerCase();
	}
};

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
