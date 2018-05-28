import PaperDuck from './index';

PaperDuck.loadString = function(string) {
	return Promise.try(() => {
		let image = new Image();
		image.crossOrigin = 'anonymous';
		image.src = string;
		return this.loadImage(image);
	});
};
