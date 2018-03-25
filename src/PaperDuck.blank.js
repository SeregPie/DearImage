import PaperDuck from './PaperDuck';

PaperDuck.blank = function(sizeX, sizeY) {
	return new this(this.blankContext(sizeX, sizeY));
};
