import Object_is from '../@core/Object/is';

import normalizeImage from './normalizeImage';

export default function(value) {
	return (Object_is(value)
		? (Array
			.from(value)
			.map(value => normalizeImage(value))
			.filter(b => b)
		)
		: []
	);
}
