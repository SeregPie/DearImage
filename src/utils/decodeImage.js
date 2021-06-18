export default async function(image) {
	if (image.decode) {
		await image.decode();
	}
	/*
	if (!image.complete) {
		if (image.decode) {
			await image.decode();
		} else {
			try {
				await new Promise((resolve, reject) => {
					image.onload = resolve;
					image.onerror = reject;
				});
			} finally {
				image.onload = null;
				image.onerror = null;
			}
		}
	}*/
}
