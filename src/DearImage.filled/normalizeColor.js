import CSS_color_sanitize from '../@core/CSS/color/sanitize';

export default function(value) {
	if (value != null) {
		return CSS_color_sanitize(String(value));
	}
}