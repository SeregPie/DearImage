import CanvasRenderingContext2D_loadFromImageSource from './loadFromImageSource';

export default async function(url) {
	return await CanvasRenderingContext2D_loadFromImageSource(`${url}`);
}
