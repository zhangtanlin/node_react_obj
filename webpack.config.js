var webpack = require("webpack");
var path = require("path");

module.exports = {
	context: path.join(__dirname),
	entry: "./public/src/js/route.js",
	module: {
		rules: [{
	      	test: /\.js$/,
	      	exclude: /(node_modules)/,
	      	use: "babel-loader"
	    },
	    {
	      	test:/\.css$/,
	      	use:["style-loader","css-loader"]
	    }]
	},
	output: {
		path: __dirname + "/public/dist/js", //如果需要静态资源再把这个打开
		filename: "bundle.js"
	}
}