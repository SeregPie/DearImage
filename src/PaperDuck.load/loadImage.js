export default function(image) {
	return new Promise((resolve, reject) => {
		if (image.complete) {
			resolve(this.from(image));
		}
		image.addEventListener('load', () => {
			try {
				resolve(this.from(image));
			} catch (error) {
				reject(image);
			}
		});
		image.addEventListener('error', () => {
			reject(image);
		});
	});
}
