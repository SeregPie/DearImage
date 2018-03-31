import Promise_try from 'x/src/Promise/try';

import PaperDuck_loadImage from './loadImage';

export default function(string) {
	return Promise_try(() => {
		let image = new Image();
		image.crossOrigin = 'anonymous';
		image.src = string;
		return PaperDuck_loadImage(image);
	});
}
