// todo

import '../DearImage.blank';
import DearImage from '../DearImage';

import normalizeFill from './normalizeFill';

DearImage.solid = function(fill, sizeX, sizeY) {
	fill = normalizeFill(fill);
	let result = this.blank(sizeX, sizeY);
	let {context} = result;
	context.save();
	context.fillStyle = fill;
	context.fillRect(0, 0, sizeX, sizeY);
	context.restore();
	return result;
};
