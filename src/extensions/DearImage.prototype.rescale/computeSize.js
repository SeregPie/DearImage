import normalizeScaling from './normalizeScaling';

export default function(scaling, currentSize) {
	scaling = normalizeScaling(scaling);
	return currentSize * scaling;
}
