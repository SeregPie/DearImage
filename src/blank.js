import PaperDuck from './PaperDuck';
import PaperDuck_blankContext from './blankContext';

export default function(sizeX, sizeY) {
	return new PaperDuck(PaperDuck_blankContext(sizeX, sizeY));
}
