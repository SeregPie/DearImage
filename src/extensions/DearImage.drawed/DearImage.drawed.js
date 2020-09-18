import '../DearImage.blank';
import '../DearImage.filled';
import './DearImage.prototype.reframe';

import DearImage from '../../core/DearImage';
import Math_ceilDivisible from '../../core/Math/ceilDivisible';

let normalizeImage = function(value) {
	try {
		return DearImage.from(value);
	} catch {
		// pass
	}
};

DearImage.drawed = function(image, sizeX, sizeY, options) {
	image = normalizeImage(image);
	let result = this.blank(sizeX, sizeY);
	({
		sizeX,
		sizeY,
	} = result);
	let alignmentX;
	let alignmentY;
	let repeatX;
	let repeatY;
	(value => {
		if (Object_is(value)) {
			(value => {
				if (Object_is(value)) {
					alignmentX = value.x;
					alignmentY = value.y;
				} else {
					alignmentX = alignmentY = value;
				}
			})(value.alignment);
			(value => {
				if (Object_is(value)) {
					repeatX = value.x;
					repeatY = value.y;
				} else {
					repeatX = repeatY = value;
				}
			})(value.repeat);
		}
	})(options);
	if (image && sizeX && sizeY) {
		let {canvas} = (DearImage
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
		let {context} = result;
		context.drawImage(canvas, 0, 0);
	}
	return result;
};



DearImage.drawed = function(image, sizeX, sizeY, options) {
	image = normalizeImage(image);
	if (image) {
		let alignmentX;
		let alignmentY;
		let repeatX;
		let repeatY;
		(value => {
			if (Object_is(value)) {
				(value => {
					if (Object_is(value)) {
						alignmentX = value.x;
						alignmentY = value.y;
					} else {
						alignmentX = alignmentY = value;
					}
				})(value.alignment);
				(value => {
					if (Object_is(value)) {
						repeatX = value.x;
						repeatY = value.y;
					} else {
						repeatX = repeatY = value;
					}
				})(value.repeat);
			}
		})(options);
		let style = context.createPattern(image.canvas, (() => {
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
		})());
		return this.filled(style, sizeX, sizeY)
	}
	return this.blank(sizeX, sizeY);
};
