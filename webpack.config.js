var webpack = require("webpack");
var path = require("path");

module.exports = {
	context: path.join(__dirname),
	entry: "./public/src/js/route.js",
	module: {
		rules: [{
			test: /\.js?$/,
			//跳过node_modules文件
			exclude: /(node_modules)/,
			loader: "babel-loader"
		}]
	},
	output: {
		path: __dirname + "/public/dist/js", //如果需要静态资源再把这个打开
		filename: "bundle.js"
	}
}