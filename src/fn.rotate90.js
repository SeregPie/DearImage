(function(PaperDuck) {

	var f = function(cw) {
		var sizeX = this.getHeight();
		var sizeY = this.getWidth();
		if (sizeX === 0 || sizeY === 0) {
			if (sizeX === sizeY) {
				return this;
			}
			return this.constructor.blank(sizeX, sizeY);
		}
		var ctx = this.constructor.blankContext(sizeX, sizeY);
		ctx.translate(sizeX / 2, sizeY / 2);
		ctx.rotate(Math.PI / (cw ? 2 : -2));
		ctx.drawImage(this.toCanvas(), sizeY / -2, sizeX / -2);
		return this.constructor.from(ctx);
	};

	PaperDuck.fn.rotate90 = function() {
		return f.call(this, true);
	};

	PaperDuck.fn.rotate270 = function() {
		return f.call(this, false);
	};

})(PaperDuck);