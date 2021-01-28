// todo?

import String_is from './String/is';

export default class {
	static is(value) {
		return value instanceof this;
	}
	static isValid(value) {
		try {
			this.parse(value);
			return true;
		} catch {
			return false;
		}
	}
	static parse(string) {
		if (String_is(string)) {
			let matches = /^data:(.*?)(;base64)?,(.*)$/.exec(string);
			if (matches) {
				let type = matches[1];
				let encoded = matches[2];
				let data = matches[3];
				let empty = !data;
				return Object.assign(new this(), {
					type,
					encoded,
					data,
					isEmpty() {
						return empty;
					},
					toString() {
						return string;
					},
				});
			}
		}
		throw new Error('Invalid data URL.');
	}
}
