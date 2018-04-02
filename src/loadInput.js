import Promise_try from 'x/src/Promise/try';

import PaperDuck_load from './load';
import PaperDuck_loadFile from './loadFile';

export default function(input) {
	return Promise_try(() => {
		if (input.type === 'file') {
			return PaperDuck_loadFile(input.files[0]);
		}
		return PaperDuck_load(input.value);
	});
}
