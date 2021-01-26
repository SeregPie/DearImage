// todo?

import DataURL from '../@core/DataURL';
import DearImage from '../@core/DearImage';
import String_prototype_toCharCode from '../@core/String/prototype/toCharCode';

import '../DearImage.prototype.toDataURL';

DearImage.prototype.toBlob = function(...args) {
	let {
		data,
		type,
	} = DataURL.parse(this.toDataURL(...args));
	let array = String_prototype_toCharCode(atob(data));
	return new Blob([array], {type});
};
