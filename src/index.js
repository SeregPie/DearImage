import PaperDuck from './PaperDuck';

import './PaperDuck.blank';
import PaperDuck_blankCanvas from './PaperDuck.blankCanvas';
import './PaperDuck.blankContext';
import PaperDuck_createCanvas from './PaperDuck.createCanvas';
import './PaperDuck.from';
import './PaperDuck.load';
Object.assign(PaperDuck, {
	createCanvas: PaperDuck_createCanvas,
	blankCanvas: PaperDuck_blankCanvas,
});

import './PaperDuck.prototype.flop_flip_rotate180';
import './PaperDuck.prototype.resize';
import './PaperDuck.prototype.rotate90_rotate270';

export default PaperDuck;
