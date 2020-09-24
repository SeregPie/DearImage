import Blob_is from '../Blob/is';
import Buffer_is from '../Buffer/is';
import CanvasRenderingContext2D_from from './from';
import CanvasRenderingContext2D_loadFromBlob from './loadFromBlob';
import CanvasRenderingContext2D_loadFromBuffer from './loadFromBuffer';
import CanvasRenderingContext2D_loadFromDataURL from './loadFromDataURL';
import CanvasRenderingContext2D_loadFromImage from './loadFromImage';
import CanvasRenderingContext2D_loadFromString from './loadFromString';
import CanvasRenderingContext2D_loadFromURL from './loadFromURL';
import DataURL from '../DataURL';
import Image_is from '../Image/is';
import String_is from '../String/is';
import URL_is from '../URL/is';

export default async function(value) {
	if (String_is(value)) {
		return await CanvasRenderingContext2D_loadFromString(value);
	}
	if (URL_is(value)) {
		return await CanvasRenderingContext2D_loadFromURL(value);
	}
	if (DataURL.is(value)) {
		return await CanvasRenderingContext2D_loadFromDataURL(value);
	}
	if (Buffer_is(value)) {
		return await CanvasRenderingContext2D_loadFromBuffer(value);
	}
	if (Blob_is(value)) {
		return await CanvasRenderingContext2D_loadFromBlob(value);
	}
	if (Image_is(value)) {
		return await CanvasRenderingContext2D_loadFromImage(value);
	}
	return CanvasRenderingContext2D_from(value);
}
