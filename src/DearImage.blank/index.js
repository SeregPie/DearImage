import DearImage from '../DearImage';

import createCanvasRenderingContext2D from '../utils/createCanvasRenderingContext2D';

DearImage.blank = function(sizeX, sizeY) {
	// todo: validate args
	let context = createCanvasRenderingContext2D(sizeX, sizeY);
	return new this(context);
};
