import DearImage from '../../core/DearImage';
import Function_prototype_bindPartial from '../../core/Function/prototype/bindPartial';

import f from './f';

Object.assign(DearImage.prototype, {
	scaleDownIn: Function_prototype_bindPartial(f, ns => Math.min(Math.min(...ns), 1)),
	scaleDownOut: Function_prototype_bindPartial(f, ns => Math.min(Math.max(...ns), 1)),
	scaleIn: Function_prototype_bindPartial(f, ns => Math.min(...ns)),
	scaleOut: Function_prototype_bindPartial(f, ns => Math.max(...ns)),
	scaleUpIn: Function_prototype_bindPartial(f, ns => Math.max(Math.min(...ns), 1)),
	scaleUpOut: Function_prototype_bindPartial(f, ns => Math.max(Math.max(...ns), 1)),
});
