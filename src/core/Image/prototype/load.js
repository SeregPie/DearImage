import Promise_try from '../../Promise/try';

export default function(that) {
	return Promise_try(() => {
		if (!that.complete) {
			return new Promise((resolve, reject) => {
				that.onload = resolve;
				that.onerror = reject;
			}).finally(() => {
				that.onload = null;
				that.onerror = null;
			});
		}
	});
}
