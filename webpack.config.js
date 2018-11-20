const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglify-js-plugin');
const OptimizeJsPlugin = require('optimize-js-plugin');

const plugins = [
	new HtmlWebpackPlugin({
		template: 'src/index.html',
		inject: 'body'
	})
];

module.exports = (env) => {
	if(env === 'production') {
		plugins.push(
			new UglifyJsPlugin({compress: true}),
			new OptimizeJsPlugin({sourceMap: false})
		);
	}

	return {
		mode: env,
		entry: './src/index.js',
		output: {
			path: path.resolve(__dirname, 'build'),
			filename: 'app.bundle.js'
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					loader: 'babel-loader',
					options: {
						plugins: env !== 'production' ? ['react-hot-loader/babel'] : []
					}
				},
				{
					test: /\.scss$/,
					use: [
						{
							loader: 'style-loader'
						},
						{
							loader: 'css-loader',
							options: {
								modules: true,
								sourceMap: true
							}
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: true
							}
						}
					]
				},
				{
					test: /\.css$/,
					use: [
						{
							loader: 'style-loader'
						},
						{
							loader: 'css-loader',
							options: {
								modules: true,
								sourceMap: true
							}
						}
					]
				}
			]
		},
		plugins
	}
};