import PaperDuck from './PaperDuck';

import './PaperDuck/blank';
import './PaperDuck/blankCanvas';
import './PaperDuck/blankContext';
import './PaperDuck/createCanvas';
import './PaperDuck/from';
import './PaperDuck/fromImageSource';
import './PaperDuck/fromString';
import './PaperDuck/load';
import './PaperDuck/loadFile';
import './PaperDuck/loadFileReader';
import './PaperDuck/loadImage';
import './PaperDuck/loadInput';
import './PaperDuck/loadString';
import './PaperDuck/prototype/crop';
import './PaperDuck/prototype/cropAlign';
import './PaperDuck/prototype/cropMax';
import './PaperDuck/prototype/cropMin';
import './PaperDuck/prototype/drawForeground_drawBackground';
import './PaperDuck/prototype/flop_flip_rotate180';
import './PaperDuck/prototype/resize';
import './PaperDuck/prototype/rotate90_rotate270';
import './PaperDuck/prototype/scale';
import './PaperDuck/prototype/scaleMin_scaleMax';
import './PaperDuck/prototype/toImage';

PaperDuck.prototype.contain = PaperDuck.prototype.cropMin;
PaperDuck.prototype.cover = PaperDuck.prototype.cropMax;

export default PaperDuck;
