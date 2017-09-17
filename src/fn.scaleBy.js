(function(PaperDuck) {

	var f = function(_by, sizeX, sizeY, smoothing) {
		sizeX = parseInt(sizeX);
		sizeY = parseInt(sizeY);
		var currSizeX = this.getWidth();
		var currSizeY = this.getHeight();
		if (isNaN(sizeX)) {
			sizeX = currSizeX;
		} else {
			sizeX = Math.abs(sizeX);
		}
		if (isNaN(sizeY)) {
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
		var scaleFactorX = sizeX / currSizeX;
		var scaleFactorY = sizeY / currSizeY;
		var scaleFactor = _by(scaleFactorX, scaleFactorY);
		return this.scale(scaleFactor, smoothing);
	};

	PaperDuck.fn.scaleMin = (function() {
		var by = function(x, y) {
			return Math.min(x, y);
		};

		return function() {
			var args = Array.prototype.slice.call(arguments);
			return f.apply(this, [by].concat(args));
		};
	})();

	PaperDuck.fn.scaleMax = (function() {
		var by = function(x, y) {
			return Math.max(x, y);
		};

		return function() {
			var args = Array.prototype.slice.call(arguments);
			return f.apply(this, [by].concat(args));
		};
	})();

})(PaperDuck);