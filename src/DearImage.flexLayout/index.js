import DearImage from '../@core/DearImage';
import Object_is from '../@core/Object/is';

import normalizeAlignment from './normalizeAlignment';
import normalizeDirection from './normalizeDirection';
import normalizeGap from './normalizeGap';
import normalizeImages from './normalizeImages';

DearImage.flexLayout = function(direction, images, options) {
	let alignment;
	let gapX;
	let gapY;
	{
		direction = normalizeDirection(direction);
		images = normalizeImages(images);
		if (Object_is(options)) {
			alignment = options.alignment;
			if (Object_is(options.gap)) {
				gapX = options.gap.x;
				gapY = options.gap.y;
			} else {
				gapX = gapY = options.gap;
			}
		}
		alignment = normalizeAlignment(alignment);
		gapX = normalizeGap(gapX);
		gapY = normalizeGap(gapY);
	}
	// todo
};


import './DearImage.blank';
import DearImage from './DearImage';

DearImage.flexX = function(images, {
	alignItems = 'center',
	gap = 0,
} = {}) {
	let sizeX = images.map(({sizeX}) => sizeX).reduce((a, n) => a + n + gap);
	let sizeY = images.map(({sizeY}) => sizeY).reduce((a, n) => Math.max(a, n));
	let image = this.blank(sizeX, sizeY);
	let {context} = image;
	let left = 0;
	images.forEach(image => {
		let top;
		switch (alignItems) {
			case 'start': {
				top = 0;
				break;
			}
			case 'center': {
				top = Math.round((sizeY - image.sizeY) / 2);
				break;
			}
			case 'end': {
				top = sizeY - image.sizeY;
				break;
			}
		}
		context.drawImage(image.canvas, left, top);
		left += image.sizeX + gap;
	});
	return image;
};

DearImage.flexY = function(images, {
	alignItems = 'center',
	gap = 0,
} = {}) {
	let sizeY = images.map(({sizeY}) => sizeY).reduce((a, n) => a + n + gap);
	let sizeX = images.map(({sizeX}) => sizeX).reduce((a, n) => Math.max(a, n));
	let image = this.blank(sizeX, sizeY);
	let {context} = image;
	let top = 0;
	images.forEach(image => {
		let left;
		switch (alignItems) {
			case 'start': {
				left = 0;
				break;
			}
			case 'center': {
				left = Math.round((sizeX - image.sizeX) / 2);
				break;
			}
			case 'end': {
				left = sizeX - image.sizeX;
				break;
			}
		}
		context.drawImage(image.canvas, left, top);
		top += image.sizeY + gap;
	});
	return image;
};
