import DearImage from '../DearImage';

import createCanvasRenderingContext2D from '../utils/createCanvasRenderingContext2D';

import normalizeSize from './normalizeSize';

DearImage.blank = function(sizeX, sizeY) {
	{
		sizeX = normalizeSize(sizeX);
		sizeY = normalizeSize(sizeY);
	}
	let context = createCanvasRenderingContext2D(sizeX, sizeY);
	return new this(context);
};
