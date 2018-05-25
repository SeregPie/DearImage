import PaperDuck from './index';

PaperDuck.blankContext = function(sizeX, sizeY) {
	return this.blankCanvas(sizeX, sizeY).getContext('2d');
};
