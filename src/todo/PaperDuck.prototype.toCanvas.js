import PaperDuck from '../PaperDuck';

PaperDuck.prototype.toCanvas = function() {
	return this.toContext().canvas;
};