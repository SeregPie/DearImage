import PaperDuck from '../index';

PaperDuck.prototype.cropScale = function(width, height, align, smoothing) {
	return this.scaleMax(width, height, smoothing).cropAlign(width, height, align);
};
