// todo?

import Font from './Font';

export default class {
	static is(value) {
		return value instanceof this;
	}
	constructor(family, {
		style,
		variant,
		weight,
	} = {}) {
		Object.assign(this, {
			family,
			style,
			variant,
			weight,
			async load(source) {
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
					await document.fonts.load(`${font}`);
					return;
				} catch {
					// pass
				}
			},
		});
	}
}
