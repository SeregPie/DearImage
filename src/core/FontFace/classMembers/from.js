import Object_is from '../../Object/is';
import String_is from '../../String/is';

import defaultFamily from './defaultFamily';
import defaultStyle from './defaultStyle';
import defaultVariant from './defaultVariant';
import defaultWeight from './defaultWeight';
import sanitizeFamily from './sanitizeFamily';
import sanitizeStyle from './sanitizeStyle';
import sanitizeVariant from './sanitizeVariant';
import sanitizeWeight from './sanitizeWeight';

export default function(value) {
	let family = defaultFamily;
	let style = defaultStyle;
	let variant = defaultVariant;
	let weight = defaultWeight;
	if (String_is(value)) {
		family = sanitizeFamily(value);
	} else
	if (Object_is(value)) {
		family = sanitizeFamily(value.family);
		style = sanitizeStyle(value.style);
		variant = sanitizeVariant(value.variant);
		weight = sanitizeWeight(value.weight);
	}
	return Object.assign(new this(), {
		family,
		style,
		variant,
		weight,
	});
}
