import CanvasRenderingContext2D_create from './CanvasRenderingContext2D/create';

export default class {
	static is(value) {
		return value instanceof this;
	}
	constructor(family, size, {
		style,
		variant,
		weight,
	} = {}) {
		let string;
		{
			let array = [`${size}px`, family];
			if (weight !== undefined) {
				array.unshift(weight);
			}
			if (variant !== undefined) {
				array.unshift(variant);
			}
			if (style !== undefined) {
				array.unshift(style);
			}
			string = array.join(' ');
		}
		Object.assign(this, {
			family,
			size,
			style,
			variant,
			weight,
			measureText(text) {
				let context = CanvasRenderingContext2D_create(0, 0);
				context.font = string;
				return context.measureText(text);
			},
			toString() {
				return string;
			},
		});
	}
}
