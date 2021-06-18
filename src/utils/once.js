export default function(fn) {
	let ResultSymbol = Symbol();
	return function() {
		let result = this[ResultSymbol];
		if (result === undefined) {
			result = fn.apply(this, arguments);
			this[ResultSymbol] = result;
		}
		return result;
	};
}
