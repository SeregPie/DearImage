import require from '@seregpie/native-require';

import CSS_font from '../../CSS/font';
import Object_isNullish from '../../Object/isNullish';

export default async function(source) {
	let {
		family,
		style,
		variant,
		weight,
	} = this;
	if (Object_isNullish(source)) {
		try {
			await document.fonts.load(CSS_font(family, 10, style, variant, weight));
		} catch {
			// pass
		}
	} else {
		try {
			await (new FontFace(family, source, {style, variant, weight})).load();
		} catch {
			// pass
		}
		try {
			let {registerFont} = require('canvas');
			await registerFont(source, {family, style, variant, weight});
		} catch {
			// pass
		}
	}
}
