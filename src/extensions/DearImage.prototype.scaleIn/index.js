import '../DearImage.prototype.scale';

import DearImage from '../../core/DearImage';
import Function_prototype_bindPartial from '../../core/Function/prototype/bindPartial';

import addScaling from './addScaling';

let func = function(computeScaling, sizeX, sizeY) {
	let {
		sizeX: currentSizeX,
		sizeY: currentSizeY,
	} = this;
	let scalings = [];
	addScaling(scalings, sizeX, currentSizeX);
	addScaling(scalings, sizeY, currentSizeY);
	if (scalings.length) {
		let scaling = computeScaling(scalings);
		return this.scale(scaling);
	}
	return this;
};

Object.assign(DearImage.prototype, {
	scaleDownIn: Function_prototype_bindPartial(func, ns => Math.min(Math.min(...ns), 1)),
	scaleDownOut: Function_prototype_bindPartial(func, ns => Math.min(Math.max(...ns), 1)),
	scaleIn: Function_prototype_bindPartial(func, ns => Math.min(...ns)),
	scaleOut: Function_prototype_bindPartial(func, ns => Math.max(...ns)),
	scaleUpIn: Function_prototype_bindPartial(func, ns => Math.max(Math.min(...ns), 1)),
	scaleUpOut: Function_prototype_bindPartial(func, ns => Math.max(Math.max(...ns), 1)),
});
