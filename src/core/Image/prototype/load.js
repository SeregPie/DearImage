export default async function(that) {
	if (!that.complete) {
		try {
			await new Promise((resolve, reject) => {
				that.onload = resolve;
				that.onerror = reject;
			});
		} finally {
			that.onload = null;
			that.onerror = null;
		}
	}
}
