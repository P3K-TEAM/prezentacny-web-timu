module.exports = process.env.CYPRESS_ENV
	? {} // workaround for https://github.com/cypress-io/cypress/issues/2945
	: {
			presets: ['@vue/cli-plugin-babel/preset'],
	};
