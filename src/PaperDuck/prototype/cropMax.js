import PaperDuck from '../index';

PaperDuck.prototype.cropMax = function(width, height, align, smoothing) {
	return this.scaleMax(width, height, smoothing).cropAlign(width, height, align);
};
