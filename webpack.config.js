webpack = require('webpack');
path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    context: __dirname,
    entry: {
        bundle: './app/main.js',
        styles: './app/styles/main.scss'
    },
    output: {
        filename: '[name].js',
        path: './dist',
        library: '[name]'
    },
	devtool: '#cheap-module-source-map',
	module: {
		loaders: [
		{
			test: /\.js$/,
			loader: 'babel-loader'
		},
		{
			test: /\.scss$/,
			loader: ExtractTextPlugin.extract('style-loader', 'css-loader!resolve-url!sass-loader?sourceMap')
		},
		{
			test: /\.css$/,
			loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
		},
		]
	},
	plugins: [
	new ExtractTextPlugin('styles.css', {
		allChunks: true
	})
	]
};