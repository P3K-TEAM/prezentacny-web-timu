module.exports = {
	publicPath: '/',
	outputDir: 'dist',
	filenameHashing: process.env.NODE_ENV !== 'production',
	devServer: {
		port: 8080
	}
};
