import normalize from  '../DearImage.text/normalizeFill';

import defaultValue from './defaultFill';

export default function(value) {
	return normalize(value, defaultValue);
}
