import nativeRequire from '@seregpie/native-require';

import './DearImage.prototype.toBuffer';
import DearImage from './DearImage';

DearImage.prototype.saveToFileSystem = function(target, ...args) {
	return new Promise((resolve, reject) => {
		let fs = nativeRequire('fs');
		let path = nativeRequire('path');
		let buffer = this.toBuffer(...args);
		fs.mkdir(path.dirname(target), {recursive: true}, error => {
			if (error) {
				reject(error);
			} else {
				fs.writeFile(target, buffer, error => {
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
