module.exports = function(app) {

	//首页
	app.get('/',function(req, res, next) {	
		//res.json({ message: 'hello index!'});
		res.render('index');
	});
	
	//用户路由分发
	var loginRegist = require('./loginRegist');
	app.use('/loginRegist',loginRegist);
	
}