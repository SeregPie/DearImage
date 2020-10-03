// todo

import CSS_fontFamily_sanitize from '../@core/CSS/fontFamily/sanitize';

export default function(value) {
	if (value != null) {
		return CSS_fontFamily_sanitize(String(value));
	}
}