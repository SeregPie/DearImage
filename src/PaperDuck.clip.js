import Lang_isUndefined from 'x/src/Lang/isUndefined';

import PaperDuck from './PaperDuck';
import PaperDuck_blank from './PaperDuck.blank';
import PaperDuck_blankContext from './PaperDuck.blankContext';

export default function(instance, offsetX = 0, offsetY = 0, sizeX, sizeY) {
	let currSizeX = instance.width;
	let currSizeY = instance.height;
	if (offsetX < 0) {
		offsetX += currSizeX;
	}
	if (offsetY < 0) {
		offsetY += currSizeY;
	}
	if (Lang_isUndefined(sizeX)) {
		sizeX = currSizeX;
	} else if (sizeX < 0) {
		sizeX = -sizeX;
		offsetX -= sizeX;
	}
	if (Lang_isUndefined(sizeY)) {
		sizeY = currSizeY;
	} else if (sizeY < 0) {
		sizeY = -sizeY;
		offsetY -= sizeY;
	}
	if (offsetX === 0 && offsetY === 0 && sizeX === currSizeX && sizeY === currSizeY) {
		return instance;
	}
	if (sizeX === 0 || sizeY === 0) {
		return PaperDuck_blank(sizeX, sizeY);
	}
	let ctx = PaperDuck_blankContext(sizeX, sizeY);
	ctx.drawImage(instance.canvas, -offsetX, -offsetY);
	return new PaperDuck(ctx);
}
