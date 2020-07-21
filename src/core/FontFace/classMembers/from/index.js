import expandValue from './expandValue';

export default function(value) {
	try {
		let [
			family,
			style,
			variant,
			weight,
		] = expandValue(value);
		return Object.assign(new this(), {
			family,
			style,
			variant,
			weight,
		});
	} catch {
		throw new Error('Invalid font face.');
	}
}
