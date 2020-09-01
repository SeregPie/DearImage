import './DearImage.is';
import './DearImage.loadFrom';
import DearImage from './DearImage';

DearImage.loadFromExcept = async function(value) {
	return this.is(value) ? value : this.loadFrom(value);
};
