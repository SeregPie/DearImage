import Number_isNonNegativeFinite from '../core/Number/isNonNegativeFinite';

export default function(scaling, size) {
	if (Number_isNonNegativeFinite(scaling)) {
		size *= scaling;
	}
	return size;
}
