let units = require('./units/index');

(async () => {
	for (let unit of units) {
		await unit();
	}
})();
