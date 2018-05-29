import PaperDuck from '../index';

PaperDuck.prototype.scale = function(factor, smoothing) {
	return this.resize(this.width * factor, this.height * factor, smoothing);
};
