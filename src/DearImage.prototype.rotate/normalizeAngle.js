import FreeInput_toFiniteNumber from '../@core/FreeInput/toFiniteNumber';

export default function(value) {
	return FreeInput_toFiniteNumber(value, 0) % (Math.PI*2);
}