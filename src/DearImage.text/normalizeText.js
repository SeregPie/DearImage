import Object_isNullish from '../core/Object/isNullish';

export default function(value) {
	return Object_isNullish(value) ? '' : `${value}`;
}
