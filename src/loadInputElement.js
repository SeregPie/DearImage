import Promise_try from 'x/src/Promise/try';

import PaperDuck_load from './load';
import PaperDuck_loadFile from './loadFile';

export default function(element) {
	return Promise_try(() => {
		if (element.type === 'file') {
			return PaperDuck_loadFile(element.files[0]);
		}
		return PaperDuck_load(element.value);
	});
}
