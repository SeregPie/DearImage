import Promise_try from 'x/src/Promise/try';

import loadFileReader from './loadFileReader';

export default function(file) {
	return Promise_try(() => {
		let reader = new FileReader();
		reader.readAsDataURL(file);
		return loadFileReader.call(this, reader);
	});
}
