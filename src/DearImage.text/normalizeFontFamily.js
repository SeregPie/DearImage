export const defaultValue = 'sans-serif';

export default function(value) {
	if (value != null) {
		// todo
		return value;
	}
	return defaultValue;
}
