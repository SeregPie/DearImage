import Blob_prototype_isEmpty from '../Blob/prototype/isEmpty';
import CanvasRenderingContext2D_create from './create';
import CanvasRenderingContext2D_loadFromImageSource from './loadFromImageSource';

export default async function(blob) {
	if (Blob_prototype_isEmpty(blob)) {
		return CanvasRenderingContext2D_create(0, 0);
	}
	let string = URL.createObjectURL(blob);
	try {
		return await CanvasRenderingContext2D_loadFromImageSource(string);
	} finally {
		URL.revokeObjectURL(string);
	}
}
