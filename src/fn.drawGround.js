(function(PaperDuck) {

	var _toArray = function(value) {
		return Array.prototype.slice.call(value);
	};

	var f = function(_, ground, align) {
		var sizeX = this.getWidth();
		var sizeY = this.getHeight();
		if (sizeX === 0 || sizeY === 0) {
			return this;
		}
		var groundCanvas = this.constructor
			.from(ground)
			.clipAlign(sizeX, sizeY, align)
			.toCanvas();
		var ctx = this.constructor.blankContext(sizeX, sizeY);
		if (_) {
			ctx.drawImage(this.toCanvas(), 0, 0);
			ctx.drawImage(groundCanvas, 0, 0);
		} else {
			ctx.drawImage(groundCanvas, 0, 0);
			ctx.drawImage(this.toCanvas(), 0, 0);
		}
		return this.constructor.from(ctx);
	};

	PaperDuck.fn.drawForeground = function() {
		var args = _toArray(arguments);
		return f.apply(this, [true].concat(args));
	};

	PaperDuck.fn.drawBackground = function() {
		var args = _toArray(arguments);
		return f.apply(this, [false].concat(args));
	};

}).call(this, PaperDuck);