import isFinite from './isFinite';

export default function(value) {
	return isFinite(value) && value > 0;
}
