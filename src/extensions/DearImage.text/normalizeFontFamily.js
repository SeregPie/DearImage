import CSS_fontFamily_sanitize from '../../core/CSS/fontFamily/sanitize';

export default function(value) {
	return CSS_fontFamily_sanitize(String(value));
}