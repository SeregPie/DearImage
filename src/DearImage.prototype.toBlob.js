import './DearImage.prototype.toDataURL';
import DearImage from './DearImage';

import DataURL from './core/DataURL';
import String_prototype_toCharCode from './core/String/prototype/toCharCode';

DearImage.prototype.toBlob = function(...args) {
	let {
		data,
		type,
	} = DataURL.parse(this.toDataURL(...args));
	let array = String_prototype_toCharCode(atob(data));
	return new Blob([array], {type});
};
