import toFinite from '../@core/CustomInput/toFinite';

export default function(value) {
	return toFinite(value, 0) % (Math.PI*2);
}
