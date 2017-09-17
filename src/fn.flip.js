(function(PaperDuck) {

	var f = function(flipX, flipY) {
		var sizeX = this.getWidth();
		var sizeY = this.getHeight();
		if (sizeX === 0 || sizeY === 0) {
			if (sizeX === sizeY) {
				return this;
			}
			return this.constructor.blank(sizeX, sizeY);
		}
		var ctx = this.constructor.blankContext(sizeX, sizeY);
		ctx.translate(flipX ? sizeX : 0, flipY ? sizeY : 0);
		ctx.scale(flipX ? -1 : 1, flipY ? -1 : 1);
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

})(PaperDuck);