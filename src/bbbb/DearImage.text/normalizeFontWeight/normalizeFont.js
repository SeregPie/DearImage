// todo

import Font from '../core/Font';

export default function(value) {
	try {
		return Font.fromExcept(value);
	} catch {
		// pass
	}
}
