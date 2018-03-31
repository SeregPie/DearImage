import Promise_try from 'x/src/Promise/try';

import PaperDuck_fromImageSource from './fromImageSource';

export default function(image) {
	return Promise_try(() => {
		if (image.complete) {
			return PaperDuck_fromImageSource(image);
		}
		let loadHandler;
		let errorHandler;
		return new Promise((resolve, reject) => {
			loadHandler = resolve;
			errorHandler = reject;
			image.addEventListener('load', loadHandler);
			image.addEventListener('error', errorHandler);
		}).finally(() => {
			image.removeEventListener('load', loadHandler);
			image.removeEventListener('error', errorHandler);
		}).then(() => {
			return PaperDuck_fromImageSource(image);
		});
	});
}
