import Promise_try from 'x/src/Promise/try';

import PaperDuck_load from './load';

export default function(reader) {
	return Promise_try(() => {
		if (reader.readyState > 1) {
			return PaperDuck_load(reader.result);
		}
		let loadHandler;
		let errorHandler;
		return new Promise((resolve, reject) => {
			loadHandler = resolve;
			errorHandler = reject;
			reader.addEventListener('load', loadHandler);
			reader.addEventListener('error', errorHandler);
		}).finally(() => {
			reader.removeEventListener('load', loadHandler);
			reader.removeEventListener('error', errorHandler);
		}).then(() => {
			return PaperDuck_load(reader.result);
		});
	});
}
