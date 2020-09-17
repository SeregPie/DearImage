import CanvasRenderingContext2D_create from '../core/CanvasRenderingContext2D/create';
import DearImage from '../core/DearImage';
import Number_isNonNegativeFinite from '../core/Number/isNonNegativeFinite';

let normalizeSize = (value => {
	value = Number(value);
	if (Number_isNonNegativeFinite(value)) {
		return Math.round(value);
	}
});

DearImage.blank = function(sizeX, sizeY) {
	[
		sizeX = 0,
		sizeY = 0,
	] = [
		normalizeSize(sizeX),
		normalizeSize(sizeY),
	];
	let context = CanvasRenderingContext2D_create(sizeX, sizeY);
	return new this(context);
};
