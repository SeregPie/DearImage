import CanvasRenderingContext2D_create from './create';
import CanvasRenderingContext2D_loadFromURL from './loadFromURL';

export default async function(url) {
	if (url.isEmpty()) {
		return CanvasRenderingContext2D_create(0, 0);
	}
	return await CanvasRenderingContext2D_loadFromURL(url);
}
