import Promise_try from 'x/src/Promise/try';

import PaperDuck_loadFileReader from './loadFileReader';

export default function(file) {
	return Promise_try(() => {
		let reader = new FileReader();
		reader.readAsDataURL(file);
		return PaperDuck_loadFileReader(reader);
	});
}
