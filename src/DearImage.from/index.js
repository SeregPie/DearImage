import CanvasRenderingContext2D_from from '../@core/CanvasRenderingContext2D/from';
import DearImage from '../@core/DearImage';

DearImage.from = function(value) {
	if (this.is(value)) {
		return value;
	}
	let context = CanvasRenderingContext2D_from(value);
	return new this(context);
};

DearImage.fromExcept = (() => {
	let warn = true;
	return function(...args) {
		if (warn) {
			console.warn('[DearImage] The function `.fromExcept` is deprecated. Please use `.from` instead.');
			warn = false;
		}
		return this.from.call(this, ...args);
	};
})();