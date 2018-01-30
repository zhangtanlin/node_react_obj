var webpack = require("webpack");
var path = require("path");

//
var extractTextWebpackPlguin = require("extract-text-webpack-plugin");

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
	    },{
	    	test:/\.less$/,
	    	use: ["style-loader","css-loader","less-loader"]
	    },{
	    	test: /\.(png|woff|woff2|svg|ttf|eot|)($|\?)/i,
	      	use: "url-loader"
	    }]
	},
	plugins:[
		new extractTextWebpackPlguin("[name].css")
	],
	output: {
		path: __dirname + "/public/dist/js", //如果需要静态资源再把这个打开
		filename: "bundle.js"
	}
}