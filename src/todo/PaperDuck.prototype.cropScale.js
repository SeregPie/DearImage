import PaperDuck from '../PaperDuck';

PaperDuck.prototype.cropScale = function(sizeX, sizeY, align, smoothing) {
	return this.scaleMax(sizeX, sizeY, smoothing).cropAlign(sizeX, sizeY, align);
};