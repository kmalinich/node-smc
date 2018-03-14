/* eslint no-console : 0 */

const smc = require('../');

Object.keys(smc.metrics).forEach((key) => {
	let value = smc.get(key);

	if (value > 0) {
		console.log(key, smc.metrics[key] + ':', value);
	}
});

let i;
let f = smc.fans();

for (i = 0; i < f; i++) {
	console.log('F' + i + 'Ac', 'Fan', i, 'RPM:', smc.fanRpm(i));
}
