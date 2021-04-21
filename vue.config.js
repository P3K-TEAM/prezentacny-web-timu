module.exports = {
	publicPath: '/',
	outputDir: 'dist',
	filenameHashing: process.env.NODE_ENV !== 'production',
	productionSourceMap: false,
	devServer: {
		port: 8080,
	},
	chainWebpack: config => {
		config.plugin('html').tap(args => {
			args[0].title = 'P3K Team';
			args[0].template = 'public/index.html';
			args[0].favicon = 'public/favicon.ico';
			args[0].url = 'https://team10-20.studenti.fiit.stuba.sk/';
			args[0].description =
				'P3K Team sa skladá zo 7 tímových hráčov s kolektívnym duchom, ktorému nechýba chuť pracovať';
			return args;
		});
	},
};
