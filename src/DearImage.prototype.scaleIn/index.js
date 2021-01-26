import DearImage from '../@core/DearImage';
import Function_prototype_bindPartial from '../@core/Function/prototype/bindPartial';

import '../DearImage.prototype.scale';

import normalizeSize from './normalizeSize';

function f(aggregateScalings, sizeX, sizeY) {
	let {
		sizeX: currentSizeX,
		sizeY: currentSizeY,
	} = this;
	sizeX = normalizeSize(sizeX, currentSizeX);
	sizeY = normalizeSize(sizeY, currentSizeY);
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

Object.assign(DearImage.prototype, {
	scaleDownIn: Function_prototype_bindPartial(f, ns => Math.min(Math.min(...ns), 1)),
	scaleDownOut: Function_prototype_bindPartial(f, ns => Math.min(Math.max(...ns), 1)),
	scaleIn: Function_prototype_bindPartial(f, ns => Math.min(...ns)),
	scaleOut: Function_prototype_bindPartial(f, ns => Math.max(...ns)),
	scaleUpIn: Function_prototype_bindPartial(f, ns => Math.max(Math.min(...ns), 1)),
	scaleUpOut: Function_prototype_bindPartial(f, ns => Math.max(Math.max(...ns), 1)),
});
