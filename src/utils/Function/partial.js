export default function(func, ...partials) {
	return function(...args) {
		return func.call(this, ...partials, ...args);
	};
}
