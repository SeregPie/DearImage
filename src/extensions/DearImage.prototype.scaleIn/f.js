import '../DearImage.prototype.scale';

import normalizeSize from './normalizeSize';

export default function(aggregateScalings, sizeX, sizeY) {
	let {
		sizeX: currentSizeX,
		sizeY: currentSizeY,
	} = this;
	[
		sizeX = currentSizeX,
		sizeY = currentSizeY,
	] = [
		normalizeSize(sizeX),
		normalizeSize(sizeY),
	];
	let scalings = [];
	if (sizeX && currentSizeX) {
		let scalingX = sizeX / currentSizeX;
		scalings.push(scalingX);
	}
	if (sizeY && currentSizeY) {
		let scalingY = sizeY / currentSizeY;
		scalings.push(scalingY);
	}
	if (scalings.length) {
		let scaling = aggregateScalings(scalings);
		return this.scale(scaling);
	}
	return this;
}
