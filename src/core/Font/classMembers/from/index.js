import expandValue from './expandValue';

export default function(value) {
	try {
		let [
			family,
			size,
			style,
			variant,
			weight,
		] = expandValue(value);
		return Object.assign(new this(), {
			family,
			size,
			style,
			variant,
			weight,
		});
	} catch {
		throw new Error('Invalid font.');
	}
}
