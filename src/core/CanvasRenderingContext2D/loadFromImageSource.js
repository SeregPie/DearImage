import CanvasRenderingContext2D_loadFromImage from './loadFromImage';
import Image_create from '../Image/create';

export default async function(source) {
	let image = Image_create(source);
	return await CanvasRenderingContext2D_loadFromImage(image);
}
