// todo

import '../DearImage.prototype.scale';
import DearImage from '../DearImage';

import Function_prototype_bindPartial from '../core/Function/prototype/bindPartial';

import normalizeSize from './normalizeSize';

let f = function(pickScaling, newSizeX, newSizeY) {
	let {
		sizeX: oldSizeX,
		sizeY: oldSizeY,
	} = this;
	newSizeX = normalizeSize(newSizeX, oldSizeX);
	newSizeY = normalizeSize(newSizeY, oldSizeY);
	let scalings = [];
	if (newSizeX && oldSizeX) {
		let scalingX = newSizeX / oldSizeX;
		scalings.push(scalingX);
	}
	if (newSizeY && oldSizeY) {
		let scalingY = newSizeY / oldSizeY;
		scalings.push(scalingY);
	}
	if (scalings.length) {
		let scaling = pickScaling(scalings);
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
