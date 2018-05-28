import PaperDuck from './index';

PaperDuck.loadFileReader = function(reader) {
	return Promise.try(() => {
		if (reader.readyState > 1) {
			return this.load(reader.result);
		}
		let loadHandler;
		let errorHandler;
		return new Promise((resolve, reject) => {
			loadHandler = resolve;
			errorHandler = reject;
			reader.addEventListener('load', loadHandler);
			reader.addEventListener('error', errorHandler);
		}).then(() => {
			return this.load(reader.result);
		}).finally(() => {
			reader.removeEventListener('load', loadHandler);
			reader.removeEventListener('error', errorHandler);
		});
	});
};
