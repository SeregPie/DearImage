import PaperDuck from './PaperDuck';
import PaperDuck_blankContext from './PaperDuck.blankContext';

export default function(sizeX, sizeY) {
	return new PaperDuck(PaperDuck_blankContext(sizeX, sizeY));
}
