import CanvasRenderingContext2D_loadFromDataURL from './loadFromDataURL';
import CanvasRenderingContext2D_loadFromImageSource from './loadFromImageSource';
import DataURL from '../DataURL';

export default async function(string) {
	try {
		let url = DataURL.parse(string);
		return await CanvasRenderingContext2D_loadFromDataURL(url);
	} catch {
		// pass
	}
	return await CanvasRenderingContext2D_loadFromImageSource(string);
}
