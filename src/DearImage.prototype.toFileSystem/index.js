import '../DearImage.prototype.toBuffer';
import DearImage from '../DearImage';

DearImage.prototype.toFileSystem = function(target, ...args) {
	return new Promise((resolve, reject) => {
		let {
			mkdir,
			writeFile,
		} = require('fs');
		let {dirname} = require('path');
		let buffer = this.toBuffer(...args);
		mkdir(dirname(target), {recursive: true}, (error) => {
			if (error) {
				reject(error);
			} else {
				writeFile(target, buffer, (error) => {
					if (error) {
						reject(error);
					} else {
						resolve();
					}
				});
			}
		});
	});
};
