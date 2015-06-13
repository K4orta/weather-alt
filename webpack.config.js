'use strict';

var webpack = require('webpack');
var path = require('path');

module.exports = {
	devtool: 'inline-source-map',
	entry: [
		'webpack-dev-server/client?http://localhost:8080',
		'webpack/hot/dev-server',
		'./app/main',
		'./app/styles/main'
	],
	output: {
		path: './dist/',
		filename: 'main.js'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
			'process.env.BASE_URL': JSON.stringify(process.env.BASE_URL),
		}),
	],
	resolve: {
		extensions: ['', '.js', '.less']
	},
  	module: {
		loaders: [
			{ test: /\.jsx?$/, loaders: ['react-hot', 'babel-loader?stage=0&optional=runtime'], exclude: /node_modules/ },
			{ test: /\.less$/, loader: 'style-loader!css-loader!less-loader' },
			{ test: /\.css/, loader: "style-loader!css-loader" }
		]
	}
};