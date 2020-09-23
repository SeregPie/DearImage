// todo

import normalizeAlignment from "../DearImage.prototype.reframe/normalizeAlignment";

export default function(value) {
	if (FontFace.is(value)) {
		return value;
	}
	if (Object_is(value)) {
		let {
			family,
			style,
			variant,
			weight,
		} = value;
		family = normalizeFontFamily(family);
		style = normalizeFontStyle(style);
		variant = normalizeFontVariant(variant);
		weight = normalizeFontWeight(weight);
	}
	return new FontFace(family, {
		style,
		variant,
		weight,
	});
}