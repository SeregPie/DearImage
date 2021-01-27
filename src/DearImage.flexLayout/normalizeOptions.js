import Object_is from '../@core/Object/is';

import defaultGap from './defaultGap';
import defaultPadding from './defaultPadding';
import defaultSizeMax from './defaultSizeMax';
import defaultSizeMin from './defaultSizeMin';
import normalizeGap from './normalizeGap';
import normalizePadding from './normalizePadding';
import normalizeSizeMax from './normalizeSizeMax';
import normalizeSizeMin from './normalizeSizeMin';

export default function(value) {
	let gapX;
	let gapY;
	let paddingX;
	let paddingY;
	let sizeXMax;
	let sizeXMin;
	let sizeYMax;
	let sizeYMin;
	if (Object_is(value)) {
		(value => {
			if (Object_is(value)) {
				gapX = normalizeGap(value.x);
				gapY = normalizeGap(value.y);
			} else {
				gapX = gapY = normalizeGap(value);
			}
		})(value.gap);
		(value => {
			if (Object_is(value)) {
				paddingX = normalizePadding(value.x);
				paddingY = normalizePadding(value.y);
			} else {
				paddingX = paddingY = normalizePadding(value);
			}
		})(value.padding);
		(value => {
			if (Object_is(value)) {
				(value => {
					if (Object_is(value)) {
						sizeXMin = normalizeSizeMin(value.min);
						sizeXMax = normalizeSizeMax(value.max);
					} else {
						sizeXMin = normalizeSizeMin(value);
						sizeXMax = normalizeSizeMax(value);
					}
				})(value.x);
				(value => {
					if (Object_is(value)) {
						sizeYMin = normalizeSizeMin(value.min);
						sizeYMax = normalizeSizeMax(value.max);
					} else {
						sizeYMin = normalizeSizeMin(value);
						sizeYMax = normalizeSizeMax(value);
					}
				})(value.y);
			} else {
				sizeXMin = sizeYMin = normalizeSizeMin(value);
				sizeXMax = sizeYMax = normalizeSizeMax(value);
			}
		})(value.size);
	}
	({
		gapX = defaultGap,
		gapY = defaultGap,
		paddingX = defaultPadding,
		paddingY = defaultPadding,
		sizeXMax = defaultSizeMax,
		sizeXMin = defaultSizeMin,
		sizeYMax = defaultSizeMax,
		sizeYMin = defaultSizeMin,
	} = {
		gapX,
		gapY,
		paddingX,
		paddingY,
		sizeXMax,
		sizeXMin,
		sizeYMax,
		sizeYMin,
	});
	return {
		gapX,
		gapY,
		paddingX,
		paddingY,
		sizeXMax,
		sizeXMin,
		sizeYMax,
		sizeYMin,
	};
}
