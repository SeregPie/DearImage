import normalizeAlignment from './normalizeAlignment';

export default function(alignment, newSize, oldSize) {
	alignment = normalizeAlignment(alignment);
	switch (alignment) {
		case 'start':
			return 0;
		case 'end':
			return -newSize;
	}
	return (oldSize + newSize) / -2;
}
