import CSS_fontVariant_sanitize from '../@core/CSS/fontVariant/sanitize';

export default function(value) {
	if (value != null) {
		return CSS_fontVariant_sanitize(String(value));
	}
}