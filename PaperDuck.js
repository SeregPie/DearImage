(function() {

	var PaperDuck = function Class(ctx) {
		if (!(this instanceof Class)) {
			return new Class((function(value) {
				if (value instanceof Class) {
					return value._ctx;
				}
				if (value instanceof CanvasRenderingContext2D || value instanceof WebGLRenderingContext) {
					value = value.canvas;
				}
				var ctx = document.createElement('canvas').getContext('2d');
				ctx.canvas.width = value.naturalWidth || value.width;
				ctx.canvas.height = value.naturalHeight || value.height;
				ctx.drawImage(value, 0, 0);
				return ctx;
			})(ctx));
		}
		this._ctx = ctx;
	};

	PaperDuck.load = function(url, callback) {
		var image = new Image();
		image.setAttribute('crossOrigin', 'anonymous');
		image.onload = function() {
			callback(this(image));
		}.bind(this);
		image.src = url;
	};

	PaperDuck.empty = function(sizeX, sizeY) {
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
		return new this(ctx);
	};

	PaperDuck.fn = PaperDuck.prototype = {
		constructor: PaperDuck,

		getWidth: function() {
			return this._ctx.canvas.width;
		},

		getHeight: function() {
			return this._ctx.canvas.height;
		},

		resize: function(sizeX, sizeY, smoothing) {
			sizeX = parseInt(sizeX);
			sizeY = parseInt(sizeY);
			if (isNaN(sizeX) && isNaN(sizeY)) {
				return this;
			}
			if (!isNaN(sizeX)) {
				sizeX = Math.abs(sizeX);
			}
			if (!isNaN(sizeY)) {
				sizeY = Math.abs(sizeY);
			}
			var ctx = this._ctx;
			var currSizeX = ctx.canvas.width;
			var currSizeY = ctx.canvas.height;
			if (isNaN(sizeX)) {
				if (currSizeY === 0) {
					return this.constructor.empty(0, sizeY);
				}
				sizeX = Math.round(currSizeX * sizeY / currSizeY);
			} else
			if (isNaN(sizeY)) {
				if (currSizeX === 0) {
					return this.constructor.empty(sizeX, 0);
				}
				sizeY = Math.round(currSizeY * sizeX / currSizeX);
			}
			if (sizeX === currSizeX && sizeY === currSizeY) {
				return this;
			}
			if (currSizeX === 0 || sizeX === 0 || currSizeY === 0 || sizeY === 0) {
				return this.constructor.empty(sizeX, sizeY);
			}
			smoothing = parseFloat(smoothing);
			if (isNaN(smoothing)) {
				smoothing = 1/2;
			}
			var reversedSmoothing = (0 < smoothing && smoothing < 1) ? 1/smoothing : Infinity;
			var resizeContext = function(ctx, sizeX, sizeY) {
				var canvas = ctx.canvas;
				ctx = document.createElement('canvas').getContext('2d');
				ctx.canvas.width = sizeX;
				ctx.canvas.height = sizeY;
				ctx.scale(sizeX / canvas.width, sizeY / canvas.height);
				ctx.drawImage(canvas, 0, 0);
				return ctx;
			};
			var b;
			var f = function(currSize, finalSize) {
				if (currSize < finalSize) {
					currSize = Math.min(Math.round(currSize * reversedSmoothing), finalSize);
				} else
				if (currSize > finalSize) {
					currSize = Math.max(Math.round(currSize / reversedSmoothing), finalSize);
				} else {
					return finalSize;
				}
				b = false;
				return currSize;
			};
			for (var i = 64; i-- > 0;) {
				b = true;
				currSizeX = f(currSizeX, sizeX);
				currSizeY = f(currSizeY, sizeY);
				if (b) break;
				ctx = resizeContext(ctx, currSizeX, currSizeY);
			}
			return new this.constructor(ctx);
		},

		crop: function(offsetX, offsetY, sizeX, sizeY) {
			offsetX = parseInt(offsetX);
			offsetY = parseInt(offsetY);
			sizeX = parseInt(sizeX);
			sizeY = parseInt(sizeY);
			var ctx = this._ctx;
			var currSizeX = ctx.canvas.width;
			var currSizeY = ctx.canvas.height;
			if (isNaN(offsetX)) {
				offsetX = 0;
			} else if (offsetX < 0) {
				offsetX = Math.max(offsetX + currSizeX, 0);
			} else {
				offsetX = Math.min(offsetX, currSizeX);
			}
			if (isNaN(offsetY)) {
				offsetY = 0;
			} else if (offsetY < 0) {
				offsetY = Math.max(offsetY + currSizeY, 0);
			} else {
				offsetY = Math.min(offsetY, currSizeY);
			}
			if (isNaN(sizeX)) {
				sizeX = currSizeX - offsetX;
			} else if (sizeX < 0) {
				sizeX = Math.min(-sizeX, offsetX);
				offsetX -= sizeX;
			} else {
				sizeX = Math.min(sizeX, currSizeX - offsetX);
			}
			if (isNaN(sizeY)) {
				sizeY = currSizeY - offsetY;
			} else if (sizeY < 0) {
				sizeY = Math.min(-sizeY, offsetY);
				offsetY -= sizeY;
			} else {
				sizeY = Math.min(sizeY, currSizeY - offsetY);
			}
			if (sizeX === currSizeX && sizeY === currSizeY) {
				return this;
			}
			if (sizeX === 0 || sizeY === 0) {
				return this.constructor.empty(sizeX, sizeY);
			}
			var canvas = ctx.canvas;
			ctx = document.createElement('canvas').getContext('2d');
			ctx.canvas.width = sizeX;
			ctx.canvas.height = sizeY;
			ctx.drawImage(canvas, offsetX, offsetY, sizeX, sizeY, 0, 0, sizeX, sizeY);
			return new this.constructor(ctx);
		},

		cropAlign: function(sizeX, sizeY, align) {
			var currSizeX = this.getWidth();
			var currSizeY = this.getHeight();
			sizeX = parseInt(sizeX);
			sizeY = parseInt(sizeY);
			if (isNaN(sizeX)) {
				sizeX = currSizeX;
			} else {
				sizeX = Math.min(Math.abs(sizeX), currSizeX);
			}
			if (isNaN(sizeY)) {
				sizeY = currSizeY;
			} else {
				sizeY = Math.min(Math.abs(sizeY), currSizeY);
			}
			if (sizeX === 0 || sizeY === 0) {
				return this.constructor.empty(sizeX, sizeY);
			}
			if (sizeX === currSizeX && sizeY === currSizeY) {
				return this;
			}
			if (typeof align === 'string') {
				align = align
					.toLowerCase()
					.split(/[^a-z0-9]+/)
					.sort()
					.filter((function() {
						var prevValue = null;
						return function(value) {
							return prevValue !== value && (prevValue = value);
						};
					})())
					.join(' ');
			}
			switch (align) {
				case 'left top':
					return this.crop(0, 0, sizeX, sizeY);
				case 'right top':
					return this.crop(-sizeX, 0, Infinity, sizeY);
				case 'bottom left':
					return this.crop(0, -sizeY, sizeX, Infinity);
				case 'bottom right':
					return this.crop(-sizeX, -sizeY, Infinity, Infinity);
				case 'center left':
					return this.crop(0, Math.max((currSizeY - sizeY) / 2, 0), sizeX, sizeY);
				case 'center right':
					return this.crop(-sizeX, Math.max((currSizeY - sizeY) / 2, 0), Infinity, sizeY);
				case 'center top':
					return this.crop(Math.max((currSizeX - sizeX) / 2, 0), 0, sizeX, sizeY);
				case 'bottom center':
					return this.crop(Math.max((currSizeX - sizeX) / 2, 0), -sizeY, sizeX, Infinity);
			}
			return this.crop(Math.max((currSizeX - sizeX) / 2, 0), Math.max((currSizeY - sizeY) / 2, 0), sizeX, sizeY);
		},

		scale: function(factor, smoothing) {
			factor = parseFloat(factor);
			if (isNaN(factor)) {
				return this;
			}
			factor = Math.abs(factor);
			return this.resize(this.getWidth() * factor, this.getHeight() * factor, smoothing);
		},

		flip: function() {
			var canvas = this._ctx.canvas;
			var currSizeX = canvas.width;
			var currSizeY = canvas.height;
			if (currSizeX === 0 || currSizeY === 0) {
				return this;
			}
			var ctx = document.createElement('canvas').getContext('2d');
			ctx.canvas.width = currSizeX;
			ctx.canvas.height = currSizeY;
			ctx.translate(0, currSizeY);
			ctx.scale(1, -1);
			ctx.drawImage(canvas, 0, 0);
			return new this.constructor(ctx);
		},

		flop: function() {
			var canvas = this._ctx.canvas;
			var currSizeX = canvas.width;
			var currSizeY = canvas.height;
			if (currSizeX === 0 || currSizeY === 0) {
				return this;
			}
			var ctx = document.createElement('canvas').getContext('2d');
			ctx.canvas.width = currSizeX;
			ctx.canvas.height = currSizeY;
			ctx.translate(currSizeX, 0);
			ctx.scale(-1, 1);
			ctx.drawImage(canvas, 0, 0);
			return new this.constructor(ctx);
		},

		rotate90: function() {
			var canvas = this._ctx.canvas;
			var currSizeX = canvas.width;
			var currSizeY = canvas.height;
			if (currSizeX === 0 || currSizeY === 0) {
				return this.constructor.empty(currSizeY, currSizeX);
			}
			var ctx = document.createElement('canvas').getContext('2d');
			ctx.canvas.width = currSizeY;
			ctx.canvas.height = currSizeX;
			ctx.translate((currSizeY / 2), (currSizeX / 2));
			ctx.rotate(Math.PI / 2);
			ctx.drawImage(canvas, -(currSizeX / 2), -(currSizeY / 2));
			return new this.constructor(ctx);
		},

		rotate180: function() {
			var canvas = this._ctx.canvas;
			var currSizeX = canvas.width;
			var currSizeY = canvas.height;
			if (currSizeX === 0 || currSizeY === 0) {
				return this;
			}
			var ctx = document.createElement('canvas').getContext('2d');
			ctx.canvas.width = currSizeX;
			ctx.canvas.height = currSizeY;
			ctx.translate(currSizeX, currSizeY);
			ctx.scale(-1, -1);
			ctx.drawImage(canvas, 0, 0);
			return new this.constructor(ctx);
		},

		rotate270: function() {
			var canvas = this._ctx.canvas;
			var currSizeX = canvas.width;
			var currSizeY = canvas.height;
			if (currSizeX === 0 || currSizeY === 0) {
				return this.constructor.empty(currSizeY, currSizeX);
			}
			var ctx = document.createElement('canvas').getContext('2d');
			ctx.canvas.width = currSizeY;
			ctx.canvas.height = currSizeX;
			ctx.translate((currSizeY / 2), (currSizeX / 2));
			ctx.rotate(Math.PI / -2);
			ctx.drawImage(canvas, (currSizeX / -2), (currSizeY / -2));
			return new this.constructor(ctx);
		},

		toImage: function() {
			var image = new Image();
			image.src = this.toDataURL.apply(this, arguments);
			return image;
		},

		toImageData: function() {

		},

		toCanvas: function() {
			return this.toContext().canvas;
		},

		toContext: function() {
			var canvas = this._ctx.canvas;
			var ctx = document.createElement('canvas').getContext('2d');
			ctx.canvas.width = canvas.width;
			ctx.canvas.height = canvas.height;
			ctx.drawImage(canvas, 0, 0);
			return ctx;
		},

		toDataURL: function() {
			var canvas = this._ctx.canvas;
			return canvas.toDataURL.apply(canvas, arguments);
		},
	};

	this.PaperDuck = PaperDuck;

}).call(this);