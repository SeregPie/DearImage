// todo?

import DearImage from '../@core/DearImage';
import Math_ceilDivisible from '../@core/Math/ceilDivisible';

import '../DearImage.blank';
import '../DearImage.fill';
import '../DearImage.prototype.reframe';

import normalizeImage from './normalizeImage';
import normalizeOptions from './normalizeOptions';

DearImage.draw = function(image, sizeX, sizeY, options) {
	image = normalizeImage(image);
	let {
		alignmentX,
		alignmentY,
		repeatX,
		repeatY,
	} = normalizeOptions(options);
	let result = this.blank(sizeX, sizeY);
	({
		sizeX,
		sizeY,
	} = result);
	if (image && sizeX && sizeY) {
		let {canvas} = (DearImage
			.fill(
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
		let {context} = result;
		context.drawImage(canvas, 0, 0);
	}
	return result;
};
