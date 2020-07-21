import '../DearImage.blank';
import DearImage from '../DearImage';

import normalizeFill from './normalizeFill';

DearImage.solid = function(fill, sizeX, sizeY) {
	fill = normalizeFill(fill);
	let image = this.blank(sizeX, sizeY);
	let {context} = image;
	context.save();
	context.fillStyle = fill;
	context.fillRect(0, 0, image.sizeX, image.sizeY);
	context.restore();
	return image;
};
