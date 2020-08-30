import Buffer_prototype_isEmpty from '../Buffer/prototype/isEmpty';
import CanvasRenderingContext2D_create from './create';
import CanvasRenderingContext2D_loadFromImageSource from './loadFromImageSource';

export default async function(buffer) {
	if (Buffer_prototype_isEmpty(buffer)) {
		return CanvasRenderingContext2D_create(0, 0);
	}
	return await CanvasRenderingContext2D_loadFromImageSource(buffer);
}
