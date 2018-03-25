import PaperDuck from '../PaperDuck';

let URL = this.URL || this.webkitURL;

let _isArrayLike = function(value) {
	return value && typeof value.length === 'number' && (value.length - 1) in value
};



let loadArrayLike = function(array) {
	if (array.length > 0) {
		return this.load(array[0]);
	}
	return this.blank();
};



PaperDuck.load = function(source) {
	return Promise.resolve().then(() => {
		if (typeof source === 'string') {
			return loadString.call(this, source);
		}
		if (!(source && typeof source === 'object')) {
			return this.blank();
		}
		if (source instanceof HTMLImageElement) {
			return loadImage.call(this, source);
		}
		if (source instanceof HTMLInputElement) {
			return loadInputElement.call(this, source);
		}
		if (source instanceof HTMLInputElement) {
			return loadInputElement.call(this, source);
		}
		if (source instanceof File) {
			return loadFile.call(this, source);
		}
		if (source instanceof FileReader) {
			return loadFileReader.call(this, source);
		}
		if (_isArrayLike(source)) {
			return loadArrayLike.call(this, source);
		}
		return this.from(source);
	}.bind(this));
};


/*
if (source instanceof Uint8Array) {
	//let blob = new Blob([file], { type: "image/png" });
	return this.load(new Blob([source]));
} else
if (source instanceof ArrayBuffer) {
	this.load(new Uint8Array(source));
}

if (source instanceof Blob) {
	let urlObject = URL.createObjectURL(source);
	let image = new Image();
	image.src = urlObject;
	callback(this(image));
	URL.revokeObjectURL(urlObject);
}
*/
