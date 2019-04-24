const path = require('path');

module.exports = {
	mode: 'production',
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, 'lib'),
		filename: 'q-ui.min.js',
		libraryTarget: 'umd',
		library: 'q-ui'
	},
	module: {
		rules: [
			{
				loader: 'babel-loader',
				test: /\.(js|jsx)$/,
				exclude: /node_modules/
			},
			{
				test: /\.css$/,
				use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
			}
		]
	},
	devServer: {
		contentBase: [path.join(__dirname, 'src'), path.join(__dirname, 'lib')]
	}
};
