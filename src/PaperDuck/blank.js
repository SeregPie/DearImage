import PaperDuck from './index';

PaperDuck.blank = function(sizeX, sizeY) {
	return new this(this.blankContext(sizeX, sizeY));
};
