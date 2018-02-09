var webpack = require("webpack");
var path = require("path");

//less打包
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	context: path.join(__dirname),
	entry: "./public/src/route.js",
	module: {
		rules: [
			{
		      	test: /\.js$/,
		      	exclude: /(node_modules)/,
		      	use: "babel-loader"
		    },
		    {
		      	test:/\.css$/,
		      	use:["style-loader","css-loader"]
		    },{
				test: /\.less$/,
				use: ExtractTextPlugin.extract({
		          	fallback: 'style-loader',
		          	use: ['css-loader', 'less-loader']
		       	})
				
		    }
		    ,{
		    	test: /\iconfont.(woff|woff2|svg|ttf|eot|js|)$/,
		    	loader:'file-loader?name=iconfont/[name].[ext]'
		    }
	    ]
	},
	plugins:[
		new ExtractTextPlugin('./css/style.css')
	],
	output: {
		path: __dirname + "/public/dist/", //如果需要静态资源再把这个打开
		filename: "js/bundle.js"
	}
}