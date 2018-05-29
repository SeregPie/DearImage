import PaperDuck from './index';

PaperDuck.blankContext = function(width, height) {
	return this.blankCanvas(width, height).getContext('2d');
};
