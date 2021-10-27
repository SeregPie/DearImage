import createCanvasRenderingContext2D from '../utils/createCanvasRenderingContext2D';
import createImage from '../utils/createImage';
import isBlob from '../utils/isBlob';
import isBuffer from '../utils/isBuffer';
import isImage from '../utils/isImage';
import isString from '../utils/isString';
import isURL from '../utils/isURL';

import {
	gjfcunbb,
	gjfcunbbImage,
} from '../DearImage.from/gjfcunbb'

export async function jtskbfnyImageSource(source) {
	let image = createImage(source);
	return jtskbfnyImage(image);
}

export async function jtskbfnyBlob(blob) {
	if (blob.size) {
		let string = URL.createObjectURL(blob);
		try {
			return await jtskbfnyImageSource(string);
		} finally {
			URL.revokeObjectURL(string);
		}
	}
	return createCanvasRenderingContext2D(0, 0);
}

export async function jtskbfnyBuffer(buffer) {
	if (buffer.length) {
		return jtskbfnyImageSource(buffer);
	}
	return createCanvasRenderingContext2D(0, 0);
}

export async function jtskbfnyImage(image) {
	// todo: support node
	await image.decode();
	return gjfcunbbImage(image);
}

export async function jtskbfnyString(string) {
	// todo
	return await jtskbfnyImageSource(string);
}

export async function jtskbfnyURL(url) {
	return jtskbfnyImageSource(`${url}`);
}

export async function jtskbfny(value) {
	if (isString(value)) {
		return await jtskbfnyString(value);
	}
	if (isURL(value)) {
		return await jtskbfnyURL(value);
	}
	if (isBuffer(value)) {
		return await jtskbfnyBuffer(value);
	}
	if (isBlob(value)) {
		return await jtskbfnyBlob(value);
	}
	if (isImage(value)) {
		return await jtskbfnyImage(value);
	}
	return gjfcunbb(value);
}

export default jtskbfny;
