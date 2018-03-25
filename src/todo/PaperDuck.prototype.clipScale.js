import PaperDuck from '../PaperDuck';

PaperDuck.prototype.clipScale = function(sizeX, sizeY, align, smoothing) {
	return this.scaleMin(sizeX, sizeY, smoothing).clipAlign(sizeX, sizeY, align);
};