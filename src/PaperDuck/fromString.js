import PaperDuck from './index';

PaperDuck.fromString = function(string) {
	let image = new Image();
	image.src = string;
	return this.fromImageSource(image);
};
