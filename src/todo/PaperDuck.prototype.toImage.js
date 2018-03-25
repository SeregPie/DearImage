import PaperDuck from '../PaperDuck';

PaperDuck.prototype.toImage = function(...args) {
	let image = new Image();
	image.src = this.toDataURL(...args);
	return image;
};