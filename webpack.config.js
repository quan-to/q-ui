const path = require('path');

module.exports = {
	output: {
		filename: '[name].js',
		libraryTarget: 'umd',
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				},
			}
		],
	}
}
