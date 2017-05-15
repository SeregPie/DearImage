(function(PaperDuck) {

	var f = function(_x, _y) {
		var sizeX = this.getWidth();
		var sizeY = this.getHeight();
		if (sizeX === 0 || sizeY === 0) {
			return this;
		}
		var ctx = this.constructor.blankContext(sizeX, sizeY);
		ctx.translate(_x ? sizeX : 0, _y ? sizeY : 0);
		ctx.scale(_x ? -1 : 1, _y ? -1 : 1);
		ctx.drawImage(this.toCanvas(), 0, 0);
		return this.constructor.from(ctx);
	};

	PaperDuck.fn.flip = function() {
		return f.call(this, false, true);
	};

	PaperDuck.fn.flop = function() {
		return f.call(this, true, false);
	};

	PaperDuck.fn.rotate180 = function() {
		return f.call(this, true, true);
	};

}).call(this, PaperDuck);