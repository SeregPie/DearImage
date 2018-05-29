import PaperDuck from './index';

PaperDuck.blank = function(width, height) {
	return new this(this.blankContext(width, height));
};
