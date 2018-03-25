import PaperDuck from '../PaperDuck';

(function(PaperDuck) {

	let f = function(_by, sizeX, sizeY, smoothing) {
		sizeX = Number.parseInt(sizeX);
		sizeY = Number.parseInt(sizeY);
		let currSizeX = this.getWidth();
		let currSizeY = this.getHeight();
		if (Number.isNaN(sizeX)) {
			sizeX = currSizeX;
		} else {
			sizeX = Math.abs(sizeX);
		}
		if (Number.isNaN(sizeY)) {
			sizeY = currSizeY;
		} else {
			sizeY = Math.abs(sizeY);
		}
		if (sizeX === currSizeX && sizeY === currSizeY) {
			return this;
		}
		if (currSizeX === 0 || currSizeY === 0 || sizeX === 0 || sizeY === 0) {
			return this.constructor.blank(sizeX, sizeY);
		}
		let scaleFactorX = sizeX / currSizeX;
		let scaleFactorY = sizeY / currSizeY;
		let scaleFactor = _by(scaleFactorX, scaleFactorY);
		return this.scale(scaleFactor, smoothing);
	};

	PaperDuck.prototype.scaleMin = (function() {
		let by = function(x, y) {
			return Math.min(x, y);
		};

		return function() {
			let args = Array.prototype.slice.call(arguments);
			return f.apply(this, [by].concat(args));
		};
	})();

	PaperDuck.prototype.scaleMax = (function() {
		let by = function(x, y) {
			return Math.max(x, y);
		};

		return function() {
			let args = Array.prototype.slice.call(arguments);
			return f.apply(this, [by].concat(args));
		};
	})();

})(PaperDuck);