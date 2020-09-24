import DearImage from '../@core/DearImage';
import Object_is from '../@core/Object/is';

import defaultGap from './defaultGap';
import normalizeAlignment from './normalizeAlignment';
import normalizeDirection from './normalizeDirection';
import normalizeGap from './normalizeGap';
import normalizeImages from './normalizeImages';

DearImage.lineLayout = function(direction, images, options) {
	let alignment;
	let gapX;
	let gapY;
	{
		direction = normalizeDirection(direction);
		images = normalizeImages(images);
		(value => {
			if (Object_is(value)) {
				alignment = normalizeAlignment(value.alignment);
				(value => {
					if (Object_is(value)) {
						gapX = normalizeGap(value.x);
						gapY = normalizeGap(value.y);
					} else {
						gapX = gapY = normalizeGap(value);
					}
				})(value.gap);
			}
		})(options);
		[
			gapX = defaultGap,
			gapY = defaultGap,
		] = [
			gapX,
			gapY,
		];
	}
	// todo
};
