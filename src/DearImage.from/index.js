import CanvasRenderingContext2D_from from '../@core/CanvasRenderingContext2D/from';
import DearImage from '../@core/DearImage';

DearImage.from = function(value) {
	if (this.is(value)) {
		return value;
	}
	let context = CanvasRenderingContext2D_from(value);
	return new this(context);
};
