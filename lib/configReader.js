/**
 * Cryptonote Node.JS Pool
 * https://github.com/dvandal/cryptonote-nodejs-pool
 *
 * Configuration Reader
 **/

// Load required modules
let fs = require('fs');

// Set pool software version
global.version = "v2.0.0";

/**
 * Load pool configuration
 **/

// Get configuration file path
let configFile = (function () {
	for (let i = 0; i < process.argv.length; i++) {
		if (process.argv[i].indexOf('-config=') === 0)
			return process.argv[i].split('=')[1];
	}
	return 'config.json';
})();

// Read configuration file data
try {
	global.config = JSON.parse(fs.readFileSync(configFile));
} catch (e) {
	console.error('Failed to read config file ' + configFile + '\n\n' + e);
	return;
}

/**
 * Developper donation addresses -- thanks for supporting my works!
 **/

let donationAddresses = {
    BTC: 'bc1q2kd8e6v4lh2hus6rwkrcj6x3fm0rqr9ccsns9d',
    BCH: 'qzrt5nmh4r92dyeevnxgmfhx5llwkg4tdv9fz7u9z5',
    DASH: 'XcZhj6NA9SUDZ5SohMCY7nhVR2Y6biz7AM',
    ETH: '0xF194e6FBc9EF301C33f575E3f9E114307Bc03756',
    ETC: '0x9FeE4F7924CE898FDdC75b557c66cefB5378DbAb',
    LTC: 'LKrbXsJrLKPEkDHzQD721cudygwciK1Mi2',
    USDC: '0xF194e6FBc9EF301C33f575E3f9E114307Bc03756',
    REP: '0xF194e6FBc9EF301C33f575E3f9E114307Bc03756',
    BAT: '0xF194e6FBc9EF301C33f575E3f9E114307Bc03756',
    LINK: '0xF194e6FBc9EF301C33f575E3f9E114307Bc03756',
    DAI: '0xF194e6FBc9EF301C33f575E3f9E114307Bc03756',
    XTZ: 'tz1gMqyJ2NDtFS9j5k7CQdzT4xmbYAfeC99E',
    XMR: '4Aaq1EzK27NSz9kCCMjor4PyS9D5EpUc1TccjN4797k4MoctnihPEU5QUPYnCjypeq9ohZiZF5btVMiQg83fLQAz5eLrUVD',
    ZRX: '0xF194e6FBc9EF301C33f575E3f9E114307Bc03756'

};

global.donations = {};

global.devFee = config.blockUnlocker.devDonation || 0.2;
if (config.blockUnlocker.devDonation === 0)
	global.devFee = 0.2;

let wallet = donationAddresses[config.symbol.toUpperCase()];
if (devFee && wallet)
	global.donations[wallet] = devFee;
