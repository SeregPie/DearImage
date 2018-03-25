import PaperDuck from './PaperDuck';

PaperDuck.blankContext = function(sizeX, sizeY) {
	return this.blankCanvas(sizeX, sizeY).getContext('2d');
};
