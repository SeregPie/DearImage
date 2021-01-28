export default function(value) {
	if (value != null) {
		if (String.is(value)) {
			value = value.trim().toLowerCase();
			if (['bold', 'bolder', 'lighter'].includes(value)) {
				return value;
			}
			value = Number(value);
		}
		if (Number.is(value)) {
			value = value.trim().toLowerCase();
			if (['bold', 'bolder', 'lighter'].includes(value)) {
				return value;
			}
			value = Number(value);
		}
	}
}
