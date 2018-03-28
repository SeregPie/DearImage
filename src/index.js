let Function_contextWithFirstArg = function(func) {
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

import PaperDuck_clip from './PaperDuck.clip';
import PaperDuck_flip from './PaperDuck.flip';
import PaperDuck_flop from './PaperDuck.flop';
import PaperDuck_rotate180 from './PaperDuck.rotate180';
import PaperDuck_rotate270 from './PaperDuck.rotate270';
import PaperDuck_rotate90 from './PaperDuck.rotate90';
//import './PaperDuck.resize';
Object.assign(PaperDuck.prototype, {
	clip: Function_contextWithFirstArg(PaperDuck_clip),
	flip: Function_contextWithFirstArg(PaperDuck_flip),
	flop: Function_contextWithFirstArg(PaperDuck_flop),
	rotate180: Function_contextWithFirstArg(PaperDuck_rotate180),
	rotate270: Function_contextWithFirstArg(PaperDuck_rotate270),
	rotate90: Function_contextWithFirstArg(PaperDuck_rotate90),
});

export default PaperDuck;
