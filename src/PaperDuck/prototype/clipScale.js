import PaperDuck from '../index';

PaperDuck.prototype.clipScale = function(width, height, align, smoothing) {
	return this.scaleMin(width, height, smoothing).clipAlign(width, height, align);
};
