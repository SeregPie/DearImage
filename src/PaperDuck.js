(function() {

	var PaperDuck = function(source) {
		if (!(this instanceof PaperDuck)) {
			if (source) {
				if (source instanceof PaperDuck) {
					return source;
				}
				if (source.canvas instanceof HTMLCanvasElement) {
					source = source.canvas;
				}
				var sizeX = source.naturalWidth || source.width;
				var sizeY = source.naturalHeight || source.height;
				var ctx =  PaperDuck.blankContext(sizeX, sizeY);
				ctx.drawImage(source, 0, 0);
				return new PaperDuck(ctx);
			}
			return PaperDuck.blank();
		}
		this.ctx = source;
	};

	PaperDuck.blankContext = function(sizeX, sizeY) {
		sizeX = parseInt(sizeX);
		sizeY = parseInt(sizeY);
		if (isNaN(sizeX)) {
			sizeX = 0;
		} else {
			sizeX = Math.abs(sizeX);
		}
		if (isNaN(sizeY)) {
			sizeY = 0;
		} else {
			sizeY = Math.abs(sizeY);
		}
		var ctx = document.createElement('canvas').getContext('2d');
		ctx.canvas.width = sizeX;
		ctx.canvas.height = sizeY;
		return ctx;
	};

	PaperDuck.blank = function(sizeX, sizeY) {
		var ctx = this.blankContext(sizeX, sizeY);
		return new this(ctx);
	};

	PaperDuck.fn = PaperDuck.prototype = {
		constructor: PaperDuck,

		getWidth: function() {
			return this.ctx.canvas.width;
		},

		getHeight: function() {
			return this.ctx.canvas.height;
		},

		drawImage: function(image, offsetX, offsetY) {
			// ??
		},

		toImage: function() {
			var image = new Image();
			image.src = this.toDataURL.apply(this, arguments);
			return image;
		},

		toImageData: function() {
			// todo
		},

		toCanvas: function() {
			return this.toContext().canvas;
		},

		toContext: function() {
			var canvas = this.ctx.canvas;
			var ctx = this.constructor.blankContext(canvas.width, canvas.height);
			ctx.drawImage(canvas, 0, 0);
			return ctx;
		},

		toDataURL: function() {
			var canvas = this.ctx.canvas;
			return canvas.toDataURL.apply(canvas, arguments);
		},
	};

	this.PaperDuck = PaperDuck;

}).call(this);