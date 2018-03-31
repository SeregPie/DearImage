import PaperDuck from './PaperDuck';
import PaperDuck_blankContext from './blankContext';

export default function(instance, flipX, flipY) {
	let sizeX = instance.width;
	let sizeY = instance.height;
	if (sizeX === 0 || sizeY === 0) {
		return instance;
	}
	let ctx = PaperDuck_blankContext(sizeX, sizeY);
	ctx.save();
	ctx.translate(
		flipX ? sizeX : 0,
		flipY ? sizeY : 0,
	);
	ctx.scale(
		flipX ? -1 : 1,
		flipY ? -1 : 1,
	);
	ctx.drawImage(instance.canvas, 0, 0);
	ctx.restore();
	return new PaperDuck(ctx);
}
