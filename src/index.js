let aaa = function(func) {
	return function(...args) {
		return func(this, ...args);
	};
};

import PaperDuck from './PaperDuck';

import PaperDuck_blank from './PaperDuck.blank';
import PaperDuck_blankCanvas from './PaperDuck.blankCanvas';
import PaperDuck_blankContext from './PaperDuck.blankContext';
import PaperDuck_createCanvas from './PaperDuck.createCanvas';
import './PaperDuck.from';
import './PaperDuck.load';
Object.assign(PaperDuck, {
	blank: PaperDuck_blank,
	blankCanvas: PaperDuck_blankCanvas,
	blankContext: PaperDuck_blankContext,
	createCanvas: PaperDuck_createCanvas,
});

import PaperDuck_flip from './PaperDuck.flip';
import PaperDuck_flop from './PaperDuck.flop';
import PaperDuck_rotate180 from './PaperDuck.rotate180';
//import './PaperDuck.resize';
import './PaperDuck.prototype.rotate90_rotate270';
Object.assign(PaperDuck.prototype, {
	flip: aaa(PaperDuck_flip),
	flop: aaa(PaperDuck_flop),
	rotate180: aaa(PaperDuck_rotate180),
});

export default PaperDuck;
