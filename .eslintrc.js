module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		'plugin:vue/essential',
		'plugin:vue/recommended',
		'eslint:recommended'
	],
	plugins: ['vue'],
	parserOptions: {
		parser: 'babel-eslint'
	},
	rules: {
		'vue/max-attributes-per-line': [
			2,
			{
				singleline: 2,
				multiline: {
					max: 1,
					allowFirstLine: false
				}
			}
		],
		'vue/html-indent': [
			'error',
			'tab',
			{
				attribute: 1,
				baseIndent: 1,
				closeBracket: 0,
				alignAttributesVertically: true,
				ignores: []
			}
		],
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
	}
};
