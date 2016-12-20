'use strict';

module.exports = {
	entry: "./main",
	output: {
		path: __dirname,
		filename: "bundle.js",
		library: 'main'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel?presets[]=es2015﻿'
			},
			{
				test: /\.css$/,
				loader: 'style!css'
			}
		]
	}
};