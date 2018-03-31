import PaperDuck_blankCanvas from './blankCanvas';

export default function(sizeX, sizeY) {
	return PaperDuck_blankCanvas(sizeX, sizeY).getContext('2d');
}
