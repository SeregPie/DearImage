import defaultStyle from './CSS/fontStyle/default';
import defaultVariant from './CSS/fontVariant/default';
import defaultWeight from './CSS/fontWeight/default';

export default class {
	static is(value) {
		return value instanceof this;
	}
	constructor(family, size, {
		style = defaultStyle,
		variant = defaultVariant,
		weight = defaultWeight,
	} = {}) {
		Object.assign(this, {
			family,
			size,
			style,
			variant,
			weight,
		});
	}
	toCSS() {
		// todo
		let {
			family,
			size,
			style,
			variant,
			weight,
		} = this;
		return [style, variant, weight, size, family].join(' ');
	}
}
