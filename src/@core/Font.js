export default class {
	static is(value) {
		return value instanceof this;
	}
	constructor(family, size, {
		style,
		variant,
		weight,
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
		let props = [size, family];
		if (weight !== undefined) {
			props.unshift(weight);
		}
		if (variant !== undefined) {
			props.unshift(variant);
		}
		if (style !== undefined) {
			props.unshift(style);
		}
		return props.join(' ');
	}
}
