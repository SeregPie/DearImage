import Promise_try from 'x/src/Promise/try';

import loadFile from './loadFile';

export default function(element) {
	return Promise_try(() => {
		if (element.type === 'file') {
			return loadFile.call(this, element.files[0]);
		}
		return this.load(element.value);
	});
}
