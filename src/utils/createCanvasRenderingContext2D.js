import createCanvas from './createCanvas';

export default function(...args) {
	return createCanvas(...args).getContext('2d');
}
