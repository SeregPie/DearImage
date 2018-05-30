import PaperDuck from '../index';

PaperDuck.prototype.toImage = function(...args) {
	let image = new Image();
	image.src = this.toDataURL(...args);
	return image;
};
