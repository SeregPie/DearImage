import toFinite from '../@core/FreeInput/toFinite';

export default function(value) {
	return toFinite(value, 0) % (Math.PI*2);
}
