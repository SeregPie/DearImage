import Number_is from './is';
import Number_prototype_isNonNegative from './prototype/isNonNegative';

export default function(value) {
	return Number_is(value) && Number_prototype_isNonNegative(value);
}
