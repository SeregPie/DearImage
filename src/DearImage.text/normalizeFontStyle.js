import CSS_fontStyle_sanitize from '../@core/CSS/fontStyle/sanitize';

export default function(value) {
	if (value != null) {
		return CSS_fontStyle_sanitize(String(value));
	}
}