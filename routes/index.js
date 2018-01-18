


module.exports = function(app) {

	//首页
	app.get('/',function(req, res, next) {	    
		res.render('index', {
			title: '首页'
		});
	});

}