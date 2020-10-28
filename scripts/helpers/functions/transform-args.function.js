const JSON5 = require('json5');
const chalk = require('chalk');

/**
 * Function transforms command line arguments
 */

function transformArgs(...args) {
	const config = {};

	if (process.env.npm_config_argv) {
		const npm_argv = JSON.parse(process.env.npm_config_argv).original;
		// If '--' is not specified, arguments won't be passed from npm to process.argv correctly
		if (npm_argv.slice(2).length && args.length % 2 === 1) {
			console.error(
				chalk.red(
					"If running via 'npm run' with arguments, don't forget the '--' before arguments.\ne.g npm run command -- --port XXXX"
				)
			);
			process.exit(1);
		}
	}

	args.forEach((arg, index) => {
		if (arg.match(new RegExp(/--.*/))) {
			try {
				// parse object
				config[arg.replace('--', '')] = JSON5.parse(args[index + 1]); // json5 - "relaxed" json
			} catch (e) {
				// primitive
				config[arg.replace('--', '')] = args[index + 1];
			}
		}
	});

	return config;
}

module.exports = transformArgs;
