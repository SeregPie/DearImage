import CanvasRenderingContext2D_loadFrom from '../@core/CanvasRenderingContext2D/loadFrom';
import DearImage from '../@core/DearImage';

DearImage.loadFrom = async function(value) {
	if (this.is(value)) {
		return value;
	}
	let context = await CanvasRenderingContext2D_loadFrom(value);
	return new this(context);
};

DearImage.loadFromExcept = (() => {
	let warn = true;
	return function(...args) {
		if (warn) {
			console.warn('[DearImage] The function `.loadFromExcept` is deprecated. Please use `.loadFrom` instead.');
			warn = false;
		}
		return this.loadFrom.call(this, ...args);
	};
})();