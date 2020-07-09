import './DearImage.blank';
import './DearImage.is';
import DearImage from './DearImage';

import Blob_is from './core/Blob/is';
import Blob_prototype_isEmpty from './core/Blob/prototype/isEmpty';
import Buffer_is from './core/Buffer/is';
import Buffer_prototype_isEmpty from './core/Buffer/prototype/isEmpty';
import Canvas_is from './core/Canvas/is';
import DataURL from './core/DataURL';
import Image_create from './core/Image/create';
import Image_is from './core/Image/is';
import Image_prototype_load from './core/Image/prototype/load';
import ImageData_is from './core/ImageData/is';
import String_is from './core/String/is';
import URL_is from './core/URL/is';

let DearImage_fromImageData = function(data) {
	let image = this.blank(data.width, data.height);
	if (image.sizeX && image.sizeY) {
		image.context.putImageData(data, 0, 0);
	}
	return image;
};

let DearImage_fromCanvasImageSource = function(source, sizeX, sizeY) {
	let image = this.blank(sizeX, sizeY);
	if (image.sizeX && image.sizeY) {
		image.context.drawImage(source, 0, 0);
	}
	return image;
};

let DearImage_fromCanvas = function(canvas) {
	return DearImage_fromCanvasImageSource.call(this, canvas, canvas.width, canvas.height);
};

let DearImage_fromImage = function(image) {
	return DearImage_fromCanvasImageSource.call(this, image, image.naturalWidth, image.naturalHeight);
};

let DearImage_fromDearImage = function(image) {
	return DearImage_fromCanvas.call(this, image.canvas);
};

let DearImage_from = function(value) {
	if (DearImage.is(value)) {
		return DearImage_fromDearImage.call(this, value);
	}
	if (ImageData_is(value)) {
		return DearImage_fromImageData.call(this, value);
	}
	if (Canvas_is(value)) {
		return DearImage_fromCanvas.call(this, value);
	}
	if (Image_is(value)) {
		return DearImage_fromImage.call(this, value);
	}
	throw new Error();
};

let DearImage_loadFromImage = async function(image) {
	await Image_prototype_load(image);
	return DearImage_fromImage.call(this, image);
};

let DearImage_loadFromImageSource = async function(source) {
	let image = Image_create();
	image.src = source;
	return DearImage_loadFromImage.call(this, image);
};

let DearImage_loadFromBuffer = async function(buffer) {
	if (Buffer_prototype_isEmpty(buffer)) {
		return this.blank();
	}
	return DearImage_loadFromImageSource.call(this, buffer);
};

let DearImage_loadFromBlob = async function(blob) {
	if (Blob_prototype_isEmpty(blob)) {
		return this.blank();
	}
	let string = URL.createObjectURL(blob);
	try {
		return DearImage_loadFromImageSource.call(this, string);
	} finally {
		URL.revokeObjectURL(string);
	}
};

let DearImage_loadFromDataURL = async function(url) {
	if (url.isEmpty()) {
		return this.blank();
	}
	return DearImage_loadFromImageSource.call(this, `${url}`);
};

let DearImage_loadFromString = async function(string) {
	try {
		let url = DataURL.parse(string);
		return DearImage_loadFromDataURL.call(this, url);
	} catch {
		return DearImage_loadFromImageSource.call(this, string);
	}
};

let DearImage_loadFromURL = async function(url) {
	return DearImage_loadFromImageSource.call(this, `${url}`);
};

let DearImage_loadFrom = async function(value) {
	if (String_is(value)) {
		return DearImage_loadFromString.call(this, value);
	}
	if (URL_is(value)) {
		return DearImage_loadFromURL.call(this, value);
	}
	if (Buffer_is(value)) {
		return DearImage_loadFromBuffer.call(this, value);
	}
	if (Blob_is(value)) {
		return DearImage_loadFromBlob.call(this, value);
	}
	if (Image_is(value)) {
		return DearImage_loadFromImage.call(this, value);
	}
	return DearImage_from.call(this, value);
};

Object.assign(DearImage, {
	from: DearImage_from,
	loadFrom: DearImage_loadFrom,
});
