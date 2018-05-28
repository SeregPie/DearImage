import PaperDuck from './index';

PaperDuck.loadImage = function(image) {
	return Promise.try(() => {
		if (image.complete) {
			return this.fromImageSource(image);
		}
		let loadHandler;
		let errorHandler;
		return new Promise((resolve, reject) => {
			loadHandler = resolve;
			errorHandler = reject;
			image.addEventListener('load', loadHandler);
			image.addEventListener('error', errorHandler);
		}).then(() => {
			return this.fromImageSource(image);
		}).finally(() => {
			image.removeEventListener('load', loadHandler);
			image.removeEventListener('error', errorHandler);
		});
	});
};
