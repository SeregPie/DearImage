(function(PaperDuck) {

	var f = function(_cw) {
		var canvas = this.ctx.canvas;
		var sizeX = canvas.height;
		var sizeY = canvas.width;
		if (sizeX === 0 || sizeY === 0) {
			if (sizeX === sizeY) {
				return this;
			}
			return this.constructor.blank(sizeX, sizeY);
		}
		var ctx = this.constructor.blankContext(sizeX, sizeY);
		ctx.translate(sizeX / 2, sizeY / 2);
		ctx.rotate(Math.PI / (_cw ? 2 : -2));
		ctx.drawImage(canvas, sizeY / -2, sizeX / -2);
		return new this.constructor(ctx);
	};

	PaperDuck.fn.rotate90 = function() {
		return f.call(this, true);
	};

	PaperDuck.fn.rotate270 = function() {
		return f.call(this, false);
	};

}).call(this, PaperDuck);