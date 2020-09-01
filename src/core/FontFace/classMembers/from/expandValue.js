import Object_is from '../../../Object/is';
import String_is from '../../../String/is';

import defaultStyle from './defaultStyle';
import defaultVariant from './defaultVariant';
import defaultWeight from './defaultWeight';
import normalizeFamily from './normalizeFamily';
import normalizeStyle from './normalizeStyle';
import normalizeVariant from './normalizeVariant';
import normalizeWeight from './normalizeWeight';

export default function(value) {
	let family;
	let style;
	let variant;
	let weight;
	if (String_is(value)) {
		family = normalizeFamily(value);
		style = defaultStyle;
		variant = defaultVariant;
		weight = defaultWeight;
	} else
	if (Object_is(value)) {
		({
			family,
			style,
			variant,
			weight,
		} = value);
		family = normalizeFamily(family);
		style = normalizeStyle(style);
		variant = normalizeVariant(variant);
		weight = normalizeWeight(weight);
	} else {
		throw 0;
	}
	return [
		family,
		style,
		variant,
		weight,
	];
}
