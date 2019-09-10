module.exports = {
	webpackConfig: require('./webpack.config'),
	components: 'src/components/**/*.js',
	title: 'Q-UI',
	assetsDir: 'src/assets',
	skipComponentsWithoutExample: true,
	usageMode: 'expand',
	theme: {
		fontFamily: {
			base: 'Muli, Helvetica, Verdana, Arial',
		},
	},
};
