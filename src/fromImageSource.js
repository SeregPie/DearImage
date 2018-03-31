import PaperDuck from './PaperDuck';
import PaperDuck_blankContext from './blankContext';

export default function(source) {
	let sizeX = source.naturalWidth || source.width;
	let sizeY = source.naturalHeight || source.height;
	let ctx = PaperDuck_blankContext(sizeX, sizeY);
	ctx.drawImage(source, 0, 0);
	return new PaperDuck(ctx);
}
