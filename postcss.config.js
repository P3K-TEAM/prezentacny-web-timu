module.exports = {
	plugins: [
		require('tailwindcss'),
		require('autoprefixer'),
		require('postcss-discard-comments')({ removeAll: true })
	]
};
