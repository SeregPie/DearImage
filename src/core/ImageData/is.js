import ImageData_isNode from './isNode';

export default function(value) {
	let {ImageData} = globalThis;
	return (!!ImageData && value instanceof ImageData) || ImageData_isNode(value);
}
