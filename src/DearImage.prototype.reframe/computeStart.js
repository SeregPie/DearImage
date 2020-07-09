export default function(alignment, newSize, oldSize) {
	switch (alignment) {
		case 'start':
			return 0;
		case 'end':
			return -newSize;
	}
	return (oldSize + newSize) / -2;
}
