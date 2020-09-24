import CanvasRenderingContext2D_create from '../@core/CanvasRenderingContext2D/create';
import DearImage from '../@core/DearImage';

import normalizeSize from './normalizeSize';

DearImage.blank = function(sizeX, sizeY) {
	{
		sizeX = normalizeSize(sizeX);
		sizeY = normalizeSize(sizeY);
	}
	let context = CanvasRenderingContext2D_create(sizeX, sizeY);
	return new this(context);
};
