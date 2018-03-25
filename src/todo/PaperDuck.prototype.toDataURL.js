import PaperDuck from '../PaperDuck';

PaperDuck.prototype.toDataURL = function(...args) {
	return this.canvas.toDataURL(...args);
};