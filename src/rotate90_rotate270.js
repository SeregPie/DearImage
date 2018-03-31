import PaperDuck from './PaperDuck';
import PaperDuck_blank from './blank';
import PaperDuck_blankContext from './blankContext';

export default function(instance, counterclockwise) {
	let sizeX = instance.height;
	let sizeY = instance.width;
	if (sizeX === 0 || sizeY === 0) {
		if (sizeX === sizeY) {
			return this;
		}
		return PaperDuck_blank(sizeX, sizeY);
	}
	let ctx = PaperDuck_blankContext(sizeX, sizeY);
	ctx.save();
	ctx.translate(sizeX / 2, sizeY / 2);
	ctx.rotate(Math.PI / (counterclockwise ? -2 : 2));
	ctx.drawImage(instance.canvas, sizeY / -2, sizeX / -2);
	ctx.restore();
	return new PaperDuck(ctx);
}
