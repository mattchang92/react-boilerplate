const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: ['./app/src/app.js', './app/styles/styles.scss'],
	output: {
		path: __dirname + '/app/dist/js',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader!sass-loader"
				})
			},
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env']
					}
				}
			},
			{
				test: /.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015'],
				},
			}
		]
	},
	plugins: [
		new ExtractTextPlugin("../css/style.css"),
	],
};
