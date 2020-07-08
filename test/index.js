let units = require('./units');

(async () => {
	for (let unit of units) {
		await unit();
	}
})();
