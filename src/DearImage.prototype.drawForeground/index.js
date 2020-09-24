import DearImage from '../@core/DearImage';
import Function_prototype_bindPartial from '../@core/Function/prototype/bindPartial';

import f from './f';

Object.assign(DearImage.prototype, {
	drawBackground: Function_prototype_bindPartial(f, false),
	drawForeground: Function_prototype_bindPartial(f, true),
});
