import DearImage from '../@core/DearImage';

DearImage.flexLayout = function(direction, ...args) {
	switch (direction) {
		case 'x':
			return this.flexLayoutX(...args);
		case 'y':
			return this.flexLayoutY(...args);
	}
};

DearImage.flexLayoutX = function(images, {
	alignItems = 'center',
	gap = 0,
} = {}) {
	let sizeX = images.map(({sizeX}) => sizeX).reduce((a, n) => a + n + gap);
	let sizeY = images.map(({sizeY}) => sizeY).reduce((a, n) => Math.max(a, n));
	let image = this.blank(sizeX, sizeY);
	let {context} = image;
	let left = 0;
	images.forEach(image => {
		let top;
		switch (alignItems) {
			case 'start': {
				top = 0;
				break;
			}
			case 'center': {
				top = Math.round((sizeY - image.sizeY) / 2);
				break;
			}
			case 'end': {
				top = sizeY - image.sizeY;
				break;
			}
		}
		context.drawImage(image.canvas, left, top);
		left += image.sizeX + gap;
	});
	return image;
};

DearImage.flexLayoutY = function(images, {
	alignItems = 'center',
	gap = 0,
} = {}) {
	let sizeY = images.map(({sizeY}) => sizeY).reduce((a, n) => a + n + gap);
	let sizeX = images.map(({sizeX}) => sizeX).reduce((a, n) => Math.max(a, n));
	let image = this.blank(sizeX, sizeY);
	let {context} = image;
	let top = 0;
	images.forEach(image => {
		let left;
		switch (alignItems) {
			case 'start': {
				left = 0;
				break;
			}
			case 'center': {
				left = Math.round((sizeX - image.sizeX) / 2);
				break;
			}
			case 'end': {
				left = sizeX - image.sizeX;
				break;
			}
		}
		context.drawImage(image.canvas, left, top);
		top += image.sizeY + gap;
	});
	return image;
};
