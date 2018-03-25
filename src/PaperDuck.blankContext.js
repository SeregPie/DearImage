import PaperDuck_blankCanvas from './PaperDuck.blankCanvas';

export default function(sizeX, sizeY) {
	return PaperDuck_blankCanvas(sizeX, sizeY).getContext('2d');
}
