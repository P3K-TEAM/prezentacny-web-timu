const chalk = require('chalk');
const { exec } = require('child_process');
const transformArgs = require('./helpers/functions/transform-args.function');
const isDevServerRunning = require('./helpers/functions/is-dev-server-running.function');

async function main() {
	const args = transformArgs(...process.argv.slice(2));
	const targetUrl = `http://localhost:${args.port}`;

	if (args?.port && (await isDevServerRunning(targetUrl))) {
		throw new Error('Build is already running!');
	}

	exec(
		'vue-cli-service serve',
		{ stdio: 'inherit' },
		(error, stdout, stderr) => {
			if (error) {
				console.error(chalk.red(error));
				throw new stderr();
			}
		}
	).stdout.pipe(process.stdout);
}

(async function() {
	await main();
})().catch(err => {
	console.error(chalk.red(err));
	process.exit(1);
});
