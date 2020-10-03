// todo

import Array_fromExcept from '../@core/Array/fromExcept';
import Object_is from '../@core/Object/is';

import normalizeImage from './normalizeImage';

export default function(value) {
	return Object_is(value) ? Array_fromExcept(value).map(value => normalizeImage(value)) : [];
}