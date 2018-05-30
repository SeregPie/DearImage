import PaperDuck from '../index';

PaperDuck.prototype.cropMin = function(width, height, align, smoothing) {
	return this.scaleMin(width, height, smoothing).cropAlign(width, height, align);
};
