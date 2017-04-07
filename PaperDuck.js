(function() {

	var PicMap = function Class(ctx) {
		if (!(this instanceof Class)) {
			return new Class((function(value) {
				if (value instanceof Class) {
					return value._ctx;
				}
				if (value instanceof CanvasRenderingContext2D || value instanceof WebGLRenderingContext) {
					value = value.canvas;
				}
				//console.log(value instanceof HTMLImageElement);
				var ctx = document.createElement('canvas').getContext('2d');
				ctx.canvas.width = value.naturalWidth || value.width;
				ctx.canvas.height = value.naturalHeight || value.height;
				ctx.drawImage(value, 0, 0);
				return ctx;
			})(ctx));
		}
		this._ctx = ctx;
	};

	PicMap.load = function(url, callback) {
		var image = new Image();
		image.setAttribute('crossOrigin', 'anonymous');
		image.onload = function() {
			callback(this(image));
		}.bind(this);
		image.src = url;
	};

	PicMap.fn = PicMap.prototype = {
		constructor: PicMap,

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
			if (sizeX === 0 || sizeY === 0) {
				//return this.constructor.empty(sizeX, sizeY);
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
				sizeX = Math.round(currSizeX * sizeY / currSizeY);
			} else
			if (isNaN(sizeY)) {
				sizeY = Math.round(currSizeY * sizeX / currSizeX);
			}
			if (sizeX === currSizeX && sizeY === currSizeY) {
				return this;
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
			//console.log({sizeX, currSizeX, offsetX, sizeY, currSizeY, offsetY});
			if (sizeX === 0 || sizeY === 0) {
				//return this.constructor.empty(sizeX, sizeY);
			}
			var canvas = ctx.canvas;
			ctx = document.createElement('canvas').getContext('2d');
			ctx.canvas.width = sizeX;
			ctx.canvas.height = sizeY;
			ctx.drawImage(canvas, offsetX, offsetY, sizeX, sizeY, 0, 0, sizeX, sizeY);
			return new this.constructor(ctx);
		},

		//wrap
		cropAlign: function(sizeX, sizeY, align) {
			sizeX = Math.abs(parseInt(sizeX));
			sizeY = Math.abs(parseInt(sizeY));
			if (sizeX === 0 || sizeY === 0) {
				//return this.constructor.empty(sizeX, sizeY);
			}
			var currSizeX = this.getWidth();
			var currSizeY = this.getHeight();
			if (sizeX === currSizeX && sizeY === currSizeY) {
				return this;
			}
			if (typeof align === 'string') {
				// trim remove duplicates
				align = align.toLowerCase().split(/[^a-z]+/).sort().join(' ');
			}
			//console.log(align);
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
			factor = Math.max(parseFloat(factor), 0);
			if (factor === 1) {
				return this;
			}
			//var sizeX = this.getWidth() * factor;
			//var sizeY = this.getHeight() * factor;
			if (factor <= 0) {
				// return empty(0, 0);
			}
			return this.resize(this.getWidth() * factor, this.getHeight() * factor, smoothing);
		},

		//fit
		scaleToContain: function(sizeX, sizeY, smoothing) {
			sizeX = Math.abs(parseInt(sizeX));
			sizeY = Math.abs(parseInt(sizeY));
			var scaleFactorX = sizeX / this.getWidth();
			var scaleFactorY = sizeY / this.getHeight();
			var scaleFactor = Math.min(scaleFactorX, scaleFactorY);
			return this.scale(scaleFactor);
		},

		contain: function(sizeX, sizeY, smoothing) {
			//align
			return this.scaleToContain(sizeX, sizeY, smoothing).cropAlign(sizeX, sizeY);
		},

		scaleToCover: function(sizeX, sizeY, smoothing) {
			sizeX = Math.abs(parseInt(sizeX));
			sizeY = Math.abs(parseInt(sizeY));
			var scaleFactorX = sizeX / this.getWidth();
			var scaleFactorY = sizeY / this.getHeight();
			var scaleFactor = Math.max(scaleFactorX, scaleFactorY);
			return this.scale(scaleFactor);
		},

		cover: function(sizeX, sizeY, smoothing) {
			//align
			return this.scaleToCover(sizeX, sizeY, smoothing).cropAlign(sizeX, sizeY);
		},

		rotate: function() {

		},

		flip: function() {
			var canvas = this._ctx.canvas;
			var ctx = document.createElement('canvas').getContext('2d');
			ctx.canvas.width = canvas.width;
			ctx.canvas.height = canvas.height;
			ctx.translate(0, canvas.height);
			ctx.scale(1, -1);
			ctx.drawImage(canvas, 0, 0);
			return new this.constructor(ctx);
		},

		flop: function() {
			var canvas = this._ctx.canvas;
			var ctx = document.createElement('canvas').getContext('2d');
			ctx.canvas.width = canvas.width;
			ctx.canvas.height = canvas.height;
			ctx.translate(canvas.width, 0);
			ctx.scale(-1, 1);
			ctx.drawImage(canvas, 0, 0);
			return new this.constructor(ctx);
		},

		orientate1: function() {
			var canvas = this._ctx.canvas;
			var ctx = document.createElement('canvas').getContext('2d');
			ctx.canvas.width = canvas.width;
			ctx.canvas.height = canvas.height;
			ctx.translate(canvas.width, 0);
			ctx.scale(-1, 1);
			ctx.drawImage(canvas, 0, 0);
			return new this.constructor(ctx);
		},

		orientate2: function() {
			var canvas = this._ctx.canvas;
			var ctx = document.createElement('canvas').getContext('2d');
			ctx.canvas.width = canvas.width;
			ctx.canvas.height = canvas.height;
			ctx.translate(canvas.width, 0);
			ctx.scale(-1, 1);
			ctx.drawImage(canvas, 0, 0);
			return new this.constructor(ctx);
		},

		orientate3: function() {
			var canvas = this._ctx.canvas;
			var ctx = document.createElement('canvas').getContext('2d');
			ctx.canvas.width = canvas.width;
			ctx.canvas.height = canvas.height;
			ctx.translate(canvas.width, canvas.height);
			ctx.scale(-1, -1);
			ctx.drawImage(canvas, 0, 0);
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
			ctx.canvas.height = canvas.height
			ctx.drawImage(canvas, 0, 0);
			return ctx;
		},

		toDataURL: function() {
			var canvas = this._ctx.canvas;
			return canvas.toDataURL.apply(canvas, arguments);
		},
	};

	this.PicMap = PicMap;

}).call(this);

/*


CanvasRenderingContext2D
WebGLRenderingContext
WebGL2RenderingContext
RenderingContext

HTMLCanvasElement



var canvas = document.createElement('canvas');
var context = canvas.getContext('2d');
canvas.width = size[0];
canvas.height = size[1];
if (draw_background) {
	let gradient = context.createLinearGradient(0, 0, 0, canvas.height);
	gradient.addColorStop(0, this._scene_color_1);
	gradient.addColorStop(1, this._scene_color_2);
	context.fillStyle = gradient;
	context.fillRect(0, 0, canvas.width, canvas.height);
}
context.drawImage(this._generate_canvas_of_3d_renderer(), 0, 0, size[0], size[1]);
let image = canvas.toDataURL(`image/${type}`, encoder_options);
return image;





image.contain( w, h[, alignBits || mode, mode] );    // scale the image to the given width and height, some parts of the image may be letter boxed
image.cover( w, h[, alignBits || mode, mode] );      // scale the image to the given width and height, some parts of the image may be clipped
image.resize( w, h[, mode] );     // resize the image. Jimp.AUTO can be passed as one of the values.
image.scale( f[, mode] );         // scale the image by the factor f
image.scaleToFit( w, h[, mode] ); // scale the image to the largest size that fits inside the given width and height




image.resize(250, 250);           // resize the image to 250 x 250
image.resize(Jimp.AUTO, 250);     // resize the height to 250 and scale the width accordingly
image.resize(250, Jimp.AUTO);     // resize the width to 250 and scale the height accordingly

image.resize(250, 250, Jimp.RESIZE_BEZIER);

Jimp.RESIZE_NEAREST_NEIGHBOR;
Jimp.RESIZE_BILINEAR;
Jimp.RESIZE_BICUBIC;
Jimp.RESIZE_HERMITE;
Jimp.RESIZE_BEZIER;





Jimp.HORIZONTAL_ALIGN_LEFT;
Jimp.HORIZONTAL_ALIGN_CENTER;
Jimp.HORIZONTAL_ALIGN_RIGHT;

Jimp.VERTICAL_ALIGN_TOP;
Jimp.VERTICAL_ALIGN_MIDDLE;
Jimp.VERTICAL_ALIGN_BOTTOM;
For example:

image.contain(250, 250, Jimp.HORIZONTAL_ALIGN_LEFT | Jimp.VERTICAL_ALIGN_TOP);
Default align modes are :

Jimp.HORIZONTAL_ALIGN_CENTER | Jimp.VERTICAL_ALIGN_MIDDLE;





image.getBuffer( mime, cb ); // Node-style callback will be fired with result
For convenience, supported MIME types are available as static properties:

Jimp.MIME_PNG;  // "image/png"
Jimp.MIME_JPEG; // "image/jpeg"
Jimp.MIME_BMP;  // "image/bmp"




image.getBase64( mime, cb ); // Node-style callback will be fired with result
PNG and JPEG quality

The quality of JPEGs can be set with:

image.quality( n ); // set the quality of saved JPEG, 0 - 100
The format of PNGs can be set with:

image.rgba( bool );             // set whether PNGs are saved as RGBA (true, default) or RGB (false)
image.filterType( number );     // set the filter type for the saved PNG
image.deflateLevel( number );   // set the deflate level for the saved PNG
Jimp.deflateStrategy( number ); // set the deflate for the saved PNG (0-3)

For convenience, supported filter types are available as static properties:

Jimp.PNG_FILTER_AUTO;    // -1
Jimp.PNG_FILTER_NONE;    //  0
Jimp.PNG_FILTER_SUB;     //  1
Jimp.PNG_FILTER_UP;      //  2
Jimp.PNG_FILTER_AVERAGE; //  3
Jimp.PNG_FILTER_PAETH;   //  4


clip: function(offsetX, offsetY, sizeX, sizeY) {
			sizeX = parseInt(sizeX);
			sizeY = parseInt(sizeY);
			if (sizeX === 0 || sizeY === 0) {
				//return this.constructor.empty(sizeX, sizeY);
			}
			offsetX = parseInt(offsetX);
			offsetY = parseInt(offsetY);
			var ctx = this._ctx;
			var canvas = ctx.canvas;
			var currSizeX = canvas.width;
			var currSizeY = canvas.height;
			if (sizeX < 0) {
				offsetX += sizeX;
				sizeX = -sizeX;
			}
			if (sizeY < 0) {
				offsetY += sizeY;
				sizeY = -sizeY;
			}
			if (offsetX === 0 && sizeX === currSizeX && offsetY === 0 && sizeY === currSizeY) {
				return this;
			}
			ctx = document.createElement('canvas').getContext('2d');
			ctx.canvas.width = sizeX;
			ctx.canvas.height = sizeY;
			console.log('clip', -offsetX, -offsetY, currSizeX, currSizeY);
			ctx.drawImage(canvas, -offsetX, -offsetY, currSizeX, currSizeY);
			return new this.constructor(ctx);
		},



*/
