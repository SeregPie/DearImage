import require from '@seregpie/native-require';

import Font from '../../Font';

export default async function(source) {
	let {
		family,
		style,
		variant,
		weight,
	} = this;
	if (source) {
		try {
			await (new FontFace(family, source, {style, variant, weight})).load();
			return;
		} catch {
			// pass
		}
		try {
			let {registerFont} = require('canvas');
			await registerFont(source, {family, style, variant, weight});
			return;
		} catch {
			// pass
		}
	}
	try {
		let font = new Font(family, 1, {style, variant, weight});
		await document.fonts.load(font.toCSS());
	} catch {
		// pass
	}
}
