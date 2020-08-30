import normalizeAlignment from './normalizeAlignment';

export default function(alignment, size, currentSize) {
	alignment = normalizeAlignment(alignment);
	switch (alignment) {
		case 'start':
			return 0;
		case 'end':
			return -size;
	}
	return (currentSize + size) / -2;
}
