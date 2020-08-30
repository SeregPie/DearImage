import Font from '../../core/Font/index';

import defaultFontFamily from './defaultFontFamily';
import defaultFontSize from './defaultFontSize';
import defaultLineGap from './defaultLineGap';
import defaultPadding from './defaultPadding';
import defaultStrokeStyle from './defaultStrokeStyle';
import defaultStrokeWidth from './defaultStrokeWidth';
import defaultStyle from './defaultStyle';
import resolveOptions from './resolveOptions';

export default function(value) {
	let [
		alignment,
		fontFamily = defaultFontFamily,
		fontSize = defaultFontSize,
		fontStyle,
		fontVariant,
		fontWeight,
		lineGap = defaultLineGap,
		padding = defaultPadding,
		strokeStyle = defaultStrokeStyle,
		strokeWidth = defaultStrokeWidth,
		style = defaultStyle,
	] = resolveOptions(value);
	let font = new Font(fontFamily, fontSize, {
		style: fontStyle,
		variant: fontVariant,
		weight: fontWeight,
	});
	return [
		alignment,
		font,
		lineGap,
		padding,
		strokeStyle,
		strokeWidth,
		style,
	];
}
