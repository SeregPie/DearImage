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

let loadImage = function(image) {
	if (image.complete) {
		return this.from(image);
	}
	return new Promise(function(resolve, reject) {
		image.addEventListener('load', function() {
			try {
				resolve(this.from(image));
			} catch (error) {
				reject(image);
			}
		}.bind(this));

		image.addEventListener('error', function() {
			reject(image);
		});
	}.bind(this));
};

let loadString = function(string) {
	let image = new Image();
	image.crossOrigin = 'anonymous';
	image.src = string;
	return loadImage.call(this, image);
};

let loadInputElement = function(element) {
	if (element.type === 'file') {
		return loadArrayLike.call(this, element.files);
	}
	return this.load(element.value);
};

let loadFileReader = function(reader) {
	if (reader.readyState > 1) {
		return this.load(reader.result);
	}
	return new Promise((resolve, reject) => {
		reader.addEventListener('load', function() {
			try {
				this.load(reader.result).then(resolve, reject);
			} catch (error) {
				reject(reader);
			}
		}.bind(this));
		reader.addEventListener('error', Function_partial(reject, reader));
	});
};

let loadFile = function(file) {
	let reader  = new FileReader();
	reader.readAsDataURL(file);
	return loadFileReader.call(this, reader);
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
