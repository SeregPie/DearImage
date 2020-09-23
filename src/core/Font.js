// todo

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
		let {
			family,
			size,
			style,
			variant,
			weight,
		} = this;
		return [style, variant, weight, `${size}px`, family].join(' ');
	}
}
