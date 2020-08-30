import String_is from '../../../String/is';

import regex from './regex';

export default function(string) {
	if (String_is(string)) {
		let matches = regex.exec(string);
		if (matches) {
			let type = matches[1];
			let encoded = matches[2];
			let data = matches[3];
			return Object.assign(new this(), {
				type,
				encoded,
				data,
				toString() {
					return string;
				},
			});
		}
	}
	throw new Error('Invalid data URL.');
}
