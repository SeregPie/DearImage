import PaperDuck from './index';

PaperDuck.loadInput = function(input) {
	return Promise.try(() => {
		if (input.type === 'file') {
			if (input.files.length > 0) {
				return this.loadFile(input.files[0]);
			}
			return this.blank();
		}
		return this.load(input.value);
	});
};
