import String_is from './String/is';

export default class {
	static is(value) {
		return value instanceof this;
	}
	static isString(value) {
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
	isEmpty() {
		return !this.data;
	}
}
