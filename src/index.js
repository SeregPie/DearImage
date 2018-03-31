import Object_mapValues from 'x/src/Object/mapValues';
let Function_withContextAsFirstArg = function(func) {
	return function(...args) {
		return func(this, ...args);
	};
};

import PaperDuck from './PaperDuck';

import PaperDuck_blank from './blank';
import PaperDuck_blankCanvas from './blankCanvas';
import PaperDuck_blankContext from './blankContext';
import PaperDuck_createCanvas from './createCanvas';
import PaperDuck_from from './from';
import PaperDuck_load from './load';
Object.assign(PaperDuck, {
	blank: PaperDuck_blank,
	blankCanvas: PaperDuck_blankCanvas,
	blankContext: PaperDuck_blankContext,
	createCanvas: PaperDuck_createCanvas,
	from: PaperDuck_from,
	load: PaperDuck_load,
});

import PaperDuck_clip from './clip';
import PaperDuck_flip from './flip';
import PaperDuck_flop from './flop';
import PaperDuck_resize from './resize';
import PaperDuck_rotate180 from './rotate180';
import PaperDuck_rotate270 from './rotate270';
import PaperDuck_rotate90 from './rotate90';
Object.assign(PaperDuck.prototype, Object_mapValues({
	clip: PaperDuck_clip,
	flip: PaperDuck_flip,
	flop: PaperDuck_flop,
	resize: PaperDuck_resize,
	rotate180: PaperDuck_rotate180,
	rotate270: PaperDuck_rotate270,
	rotate90: PaperDuck_rotate90,
}, Function_withContextAsFirstArg));

export default PaperDuck;
