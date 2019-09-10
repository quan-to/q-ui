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
			},
			{
				test: /\.svg$/,
				use: [
					{
						loader: "babel-loader"
					},
					{
						loader: "react-svg-loader",
						options: {
							jsx: true // true outputs JSX tags
						}
					}
				]
			},
		]
	},
	externals: {
		react: 'react',
	},
	devServer: {
		contentBase: [path.join(__dirname, 'src'), path.join(__dirname, 'lib')]
	}
};
