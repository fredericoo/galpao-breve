const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
	watch: true,
	output: {
		path: path.resolve(__dirname, "public"),
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "src", "index.html"),
		}),
	],
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ["babel-loader"],
			},
		],
	},
};
