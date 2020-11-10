import Font from './Font';

import require from '@seregpie/native-require';

import defaultStyle from './CSS/fontStyle/default';
import defaultVariant from './CSS/fontVariant/default';
import defaultWeight from './CSS/fontWeight/default';

export default class {
	static is(value) {
		return value instanceof this;
	}
	constructor(family, {
		style = defaultStyle,
		variant = defaultVariant,
		weight = defaultWeight,
	} = {}) {
		Object.assign(this, {
			family,
			style,
			variant,
			weight,
		});
	}
	async load(source) {
		// todo
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
			let font = new Font(family, '8px', {style, variant, weight});
			await document.fonts.load(font.toCSS());
		} catch {
			// pass
		}
	}
}
