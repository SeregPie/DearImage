import defaultStyle from '../CSS/fontStyle/default';
import defaultVariant from '../CSS/fontVariant/default';
import defaultWeight from '../CSS/fontWeight/default';

export default class {
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
}
