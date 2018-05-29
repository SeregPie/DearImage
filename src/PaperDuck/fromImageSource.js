import PaperDuck from './index';

PaperDuck.fromImageSource = function(source) {
	let sizeX = source.naturalWidth || source.width;
	let sizeY = source.naturalHeight || source.height;
	let context = this.blankContext(sizeX, sizeY);
	context.drawImage(source, 0, 0);
	return new this(context);
};
