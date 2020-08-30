import ImageData_isInNode from './isInNode';

export default function(value) {
	let {ImageData} = globalThis;
	return (
		(!!ImageData && value instanceof ImageData)
		||
		ImageData_isInNode(value)
	);
}
