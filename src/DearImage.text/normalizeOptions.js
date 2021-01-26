export default function(value) {
	let sizeXMax;
	let sizeXMin;
	let sizeYMax;
	let sizeYMin;
	if (value == null) {
		// pass
	} else
	if (Object_is(value)) {
		(value => {
			if (value == null) {
				// pass
			} else
			if (Object_is(value)) {
				(value => {
					if (value == null) {
						// pass
					} else
					if (Object_is(value)) {
						alignmentX = value.x;
						alignmentY = value.y;
					} else {
						alignmentX = alignmentY = value;
					}
				})(value.x);
				(value => {
					if (value == null) {
						// pass
					} else
					if (Object_is(value)) {
						alignmentX = value.x;
						alignmentY = value.y;
					} else {
						alignmentX = alignmentY = value;
					}
				})(value.y);
			} else {
				sizeXMin = sizeXMax = sizeYMin = sizeYMax = normalizeSizeMin(value);
			}
		})(value.size);
	}
	({
		sizeXMax = defaultSizeMax,
		sizeXMin = defaultSizeMin,
		sizeYMax = defaultSizeMax,
		sizeYMin = defaultSizeMin,
	} = {
		sizeXMax,
		sizeXMin,
		sizeYMax,
		sizeYMin,
	});
	return {
		sizeXMax,
		sizeXMin,
		sizeYMax,
		sizeYMin,
	};
}
