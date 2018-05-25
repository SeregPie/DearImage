import PaperDuck from './index';

PaperDuck.blank = function(sizeX, sizeY) {
	return this.blankCanvas(sizeX, sizeY).getContext('2d');
};
