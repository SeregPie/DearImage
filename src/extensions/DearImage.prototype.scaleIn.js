import './DearImage.prototype.scale';

import DearImage from '../core/DearImage';
import Function_prototype_bindPartial from '../core/Function/prototype/bindPartial';
import Number_isNonNegativeFinite from '../core/Number/isNonNegativeFinite';

let normalizeSize = function(value) {
	value = Number(value);
	if (Number_isNonNegativeFinite(value)) {
		return Math.round(value);
	}
};

let f = function(aggregateScalings, sizeX, sizeY) {
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
};

Object.assign(DearImage.prototype, {
	scaleDownIn: Function_prototype_bindPartial(f, ns => Math.min(Math.min(...ns), 1)),
	scaleDownOut: Function_prototype_bindPartial(f, ns => Math.min(Math.max(...ns), 1)),
	scaleIn: Function_prototype_bindPartial(f, ns => Math.min(...ns)),
	scaleOut: Function_prototype_bindPartial(f, ns => Math.max(...ns)),
	scaleUpIn: Function_prototype_bindPartial(f, ns => Math.max(Math.min(...ns), 1)),
	scaleUpOut: Function_prototype_bindPartial(f, ns => Math.max(Math.max(...ns), 1)),
});
