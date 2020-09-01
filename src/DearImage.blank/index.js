import DearImage from '../DearImage';

import Canvas_create from '../core/Canvas/create';

import normalizeSize from './normalizeSize';

DearImage.blank = function(sizeX, sizeY) {
	sizeX = normalizeSize(sizeX);
	sizeY = normalizeSize(sizeY);
	let canvas = Canvas_create();
	canvas.width = sizeX;
	canvas.height = sizeY;
	return new this(canvas.getContext('2d'));
};
