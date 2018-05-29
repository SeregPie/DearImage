import PaperDuck from './index';

PaperDuck.fromImageSource = function(source) {
	let width = source.naturalWidth || source.width;
	let height = source.naturalHeight || source.height;
	let context = this.blankContext(width, height);
	context.drawImage(source, 0, 0);
	return new this(context);
};
