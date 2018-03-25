import Function_partial from 'x/src/Function/partial';

import PaperDuck from '../PaperDuck';

import func from './func';

PaperDuck.prototype.flop = Function_partial(func, true, false);
PaperDuck.prototype.flip = Function_partial(func, false, true);
PaperDuck.prototype.rotate180 = Function_partial(func, true, true);
