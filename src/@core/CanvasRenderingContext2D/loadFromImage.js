import CanvasRenderingContext2D_fromImage from './fromImage';
import Image_prototype_load from '../Image/prototype/load';

export default async function(image) {
	await Image_prototype_load(image);
	return CanvasRenderingContext2D_fromImage(image);
}
