module.exports = function(app) {
	
    //登录界面
	app.get('/user',function(req, res, next) {	
		res.json({message: '登录界面'});
	});
    
    
      
}