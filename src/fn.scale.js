(function(PaperDuck) {

	PaperDuck.fn.scale = function(factor, smoothing) {
		factor = parseFloat(factor);
		if (isNaN(factor)) {
			return this;
		}
		factor = Math.abs(factor);
		return this.resize(this.getWidth() * factor, this.getHeight() * factor, smoothing);
	};

}).call(this, PaperDuck);