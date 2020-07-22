export default function(x, y, a) {
	let cosA = Math.abs(Math.cos(a));
	let sinA = Math.abs(Math.sin(a));
	return [
		Math.round(x * cosA + y * sinA),
		Math.round(x * sinA + y * cosA),
	];
}
