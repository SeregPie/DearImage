import DearImage from './DearImage';

import Canvas_create from './core/Canvas/create';
import Number_isPositiveFinite from './core/Number/isPositiveFinite';

DearImage.blank = function(sizeX, sizeY) {
	if (Number_isPositiveFinite(sizeX)) {
		sizeX = Math.round(sizeX);
	} else {
		sizeX = 0;
	}
	if (Number_isPositiveFinite(sizeY)) {
		sizeY = Math.round(sizeY);
	} else {
		sizeY = 0;
	}
	let canvas = Canvas_create();
	canvas.width = sizeX;
	canvas.height = sizeY;
	return new this(canvas.getContext('2d'));
};
