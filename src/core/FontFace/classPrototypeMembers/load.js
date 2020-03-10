import CSS_font from '../../CSS/font';
import Function_noop from '../../Function/noop';
import Object_isNullish from '../../Object/isNullish';
import Promise_try from '../../Promise/try';

export default function(source) {
	return Promise_try(() => {
		let {
			family,
			style,
			variant,
			weight,
		} = this;
		if (Object_isNullish(source)) {
			try {
				return document.fonts.load(CSS_font(family, 10, style, variant, weight));
			} catch (unused) {
				// pass
			}
		} else {
			try {
				return (new FontFace(family, source, {style, variant, weight})).load();
			} catch (unused) {
				// pass
			}
			try {
				let {registerFont} = require('canvas');
				return registerFont(source, {family, style, variant, weight});
			} catch (unused) {
				// pass
			}
		}
	}).then(Function_noop);
}
