import './DearImage.from';
import './DearImage.is';
import DearImage from './DearImage';

DearImage.fromExcept = function(value) {
	return this.is(value) ? value : this.from(value);
};
