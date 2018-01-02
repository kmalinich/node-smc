let metrics = require('./metrics');
let smc     = require('./build/Release/smc');

module.exports = {
	cpuTemperature : (i) => { return smc.get('TC'+i+'C'); },

	fanRpm : (i) => { return smc.get('F'+i+'Ac'); },
	fans   : ()  => { return smc.get('FNum');     },

	get : smc.get,

	metrics,
};
