import Function_partial from 'x/src/Function/partial';

import PaperDuck from '../PaperDuck';

import func from './func';

PaperDuck.prototype.rotate90 = Function_partial(func, false);
PaperDuck.prototype.rotate270 = Function_partial(func, true);
