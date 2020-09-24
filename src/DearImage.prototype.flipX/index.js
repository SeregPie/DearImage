import DearImage from '../@core/DearImage';
import Function_prototype_bindPartial from '../@core/Function/prototype/bindPartial';

import f from './f';

Object.assign(DearImage.prototype, {
	flipX: Function_prototype_bindPartial(f, true, false),
	flipY: Function_prototype_bindPartial(f, false, true),
});
