import PaperDuck from './index';

PaperDuck.loadFile = function(file) {
	return Promise.try(() => {
		let reader = new FileReader();
		reader.readAsDataURL(file);
		return this.loadFileReader(reader);
	});
};
