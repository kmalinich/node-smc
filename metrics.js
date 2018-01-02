let smc = require('./build/Release/smc');

var metrics = {
	FNum: 'Fan count',

	F0Ac: 'Fan 0 RPM',
	F0Mn: 'Fan 0 RPM min',
	F0Mx: 'Fan 0 RPM max',
	F0Tg: 'Fan 0 RPM target',

	F1Ac: 'Fan 1 RPM',
	F1Mn: 'Fan 1 RPM min',
	F1Mx: 'Fan 1 RPM max',
	F1Tg: 'Fan 1 RPM target',

	F2Ac: 'Fan 2 RPM',
	F2Mn: 'Fan 2 RPM min',
	F2Mx: 'Fan 2 RPM max',
	F2Tg: 'Fan 2 RPM target',

	F3Ac: 'Fan 3 RPM',
	F3Mn: 'Fan 3 RPM min',
	F3Mx: 'Fan 3 RPM max',
	F3Tg: 'Fan 3 RPM target',

	F4Ac: 'Fan 4 RPM',
	F4Mn: 'Fan 4 RPM min',
	F4Mx: 'Fan 4 RPM max',
	F4Tg: 'Fan 4 RPM target',

	F5Ac: 'Fan 5 RPM',
	F5Mn: 'Fan 5 RPM min',
	F5Mx: 'Fan 5 RPM max',
	F5Tg: 'Fan 5 RPM target',

	F6Ac: 'Fan 6 RPM',
	F6Mn: 'Fan 6 RPM min',
	F6Mx: 'Fan 6 RPM max',
	F6Tg: 'Fan 6 RPM target',

	TA0P: 'Ambient 0P',
	TA0p: 'Ambient 0p',
	TA1P: 'Ambient 1P',
	TA1p: 'Ambient 1p',

	TA0S: 'PCIe 1 pos 1',
	TA1S: 'PCIe 1 pos 2',
	TA2S: 'PCIe 2 pos 1',
	TA3S: 'PCIe 2 pos 2',

	TB0T: 'Battery TS_MAX',
	TB1T: 'Battery 1',
	TB2T: 'Battery 2',
	TB3T: 'Battery 3',

	TC0C: 'CPU 0 Core',
	TC0D: 'CPU 0 Die',
	TC0E: 'CPU 0 ??',
	TC0F: 'CPU 0 ??',
	TC0G: 'CPU 0 ??',
	TC0H: 'CPU 0 Heatsink',
	TC0J: 'CPU 0 ??',
	TC0P: 'CPU 0 proximity',

	TC1D: 'CPU1 die',
	TC2D: 'CPU2 die',
	TC3D: 'CPU3 die',
	TCAD: 'CPUA die',

	TC1C: 'Core 1',
	TC2C: 'Core 2',
	TC3C: 'Core 3',
	TC4C: 'Core 4',
	TC5C: 'Core 5',
	TC6C: 'Core 6',
	TC7C: 'Core 7',
	TC8C: 'Core 8',
	TCGC: 'PECI GPU',
	TCGc: 'PECI GPU',
	TCSA: 'PECI SA',
	TCSC: 'PECI SA',
	TCSc: 'PECI SA',
	TCXC: 'PECI CPU',
	TCXc: 'PECI CPU',

	TG0D: 'GPU 0 Die',
	TG0H: 'GPU 0 Heatsink',
	TG0P: 'GPU 0 proximity',
	TG1D: 'GPU 1 Die',
	TG1H: 'GPU 1 Heatsink',

	TH0P: 'HDD 0 proximity',

	TL0P: 'LCD 0 proximity',

	TM0P: 'RAM slot 0 proximity',
	TM0S: 'RAM slot 0 DIMM',

	TO0P: 'Optical drive proximity',

	TPCD: 'Platform controller hub die',

	TS0C: 'Expansion slots',

	TW0P: 'AirPort proximity',

	Tb0P: 'BLC proximity',

	Th1H: 'NB/CPU/GPU heatpipe 1 proximity',

	Tm0p: 'Misc proximity p (clock chip)',
	Tm0P: 'Misc proximity P',

	Tp0P: 'PowerSupply proximity',

	Ts0P: 'Palm rest L',
	Ts0S: 'Memory Bank proximity',
	Ts1p: 'Palm rest R',

	Vp1C: 'Voltage 1C',
};

module.exports = {
	cpuTemperature : function (i) { return smc.get('TC'+i+'C'); },
	fanRpm         : function (i) { return smc.get('F'+i+'Ac'); },
	fans           : function() { return smc.get('FNum'); },
	get            : smc.get,
	metrics,
};
