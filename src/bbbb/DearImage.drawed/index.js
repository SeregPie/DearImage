import '../DearImage.blank';
import '../DearImage.filled';
import '../DearImage.prototype.reframe';

import DearImage from '../../core/DearImage';
import Math_ceilDivisible from '../../core/Math/ceilDivisible';

import normalizeImage from './normalizeImage';
import normalizeOptions from './normalizeOptions';

DearImage.drawed = function(image, sizeX, sizeY, options) {
	let result = this.blank(sizeX, sizeY);
	({
		sizeX,
		sizeY,
	} = result);
	if (sizeX && sizeY) {
		image = normalizeImage(image);
		if (image) {
			let [
				alignmentX,
				alignmentY,
				repeatX,
				repeatY,
			] = normalizeOptions(options);
			let {context} = result;
			image = (this
				.filled(
					context.createPattern(image.canvas, (() => {
						if (repeatX && repeatY) {
							return 'repeat';
						}
						if (repeatX) {
							return 'repeat-x';
						}
						if (repeatY) {
							return 'repeat-y';
						}
						return 'no-repeat';
					})()),
					Math_ceilDivisible(sizeX, image.sizeX),
					Math_ceilDivisible(sizeY, image.sizeY),
				)
				.reframe(sizeX, sizeY, alignmentX, alignmentY)
			);
		}
	}
	return result;
};
