import PaperDuck from '../PaperDuck';

PaperDuck.prototype.scale = function(factor, smoothing) {
	factor = Number.parseFloat(factor);
	if (Number.isNaN(factor)) {
		return this;
	}
	factor = Math.abs(factor);
	return this.resize(this.getWidth() * factor, this.getHeight() * factor, smoothing);
};