import CSS_color_sanitize from '../../core/CSS/color/sanitize';

export default function(value) {
	return CSS_color_sanitize(String(value));
}