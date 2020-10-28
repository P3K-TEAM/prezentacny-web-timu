const fetch = require('node-fetch');

async function isDevServerRunning(url) {
	return fetch(url)
		.then(response => response.ok)
		.catch(() => {}); // ignore the error if dev server is not running
}

module.exports = isDevServerRunning;
