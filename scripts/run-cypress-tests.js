const { merge } = require('lodash');
const chalk = require('chalk');
const cypress = require('cypress');
const transformArgs = require('./helpers/functions/transform-args.function');
const isDevServerRunning = require('./helpers/functions/is-dev-server-running.function');

async function main() {
	const options = {
		...merge(
			{
				config: {
					baseUrl: 'http://localhost:8080'
				},
				runtimeMode: process.argv[2] // 'run' | 'open'
			},
			transformArgs(...process.argv.slice(2))
		)
	};

	if (!(await isDevServerRunning(options.config.baseUrl))) {
		throw new Error(
			'Dev server is not running! Please run `npm run serve`'
		);
	}

	console.log('Starting Cypress...');

	return options.runtimeMode === 'run'
		? cypress.run(options)
		: cypress.open(options);
}

(async function() {
	await main();
})().catch(err => {
	console.error(chalk.red(err));
	process.exit(1);
});
