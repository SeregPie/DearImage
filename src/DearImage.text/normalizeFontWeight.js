import CSS_fontWeight_sanitize from '../@core/CSS/fontWeight/sanitize';

export default function(value) {
	if (value != null) {
		return CSS_fontWeight_sanitize(String(value));
	}
}