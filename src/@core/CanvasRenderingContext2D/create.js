import Canvas_create from '../Canvas/create';

export default function(...args) {
	return Canvas_create(...args).getContext('2d');
}
