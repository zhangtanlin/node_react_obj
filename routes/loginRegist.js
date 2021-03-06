var express = require('express');
var router = express.Router();

router.post('/login',function(req,res,next){
	var params = req.body;
    m_loginregist.find({}, function(err, resData) {
        //console.log(typeof resData);
        if(err) return next(err);
        for(var i = 0; i < resData.length; i++) {
            
            console.log(resData[i].user_name);
            console.log(params.user_name);
            console.log(resData[i].user_password);
            console.log(params.user_password);
            console.log(resData[i].user_phone);
            console.log(params.user_phone);
            
            if(resData[i].user_name == params.user_name 
            	&& resData[i].user_password == params.user_password 
            	&& resData[i].user_phone == params.user_phone) {
                //创建token
                var token = jwt.sign({name: resData[i].user_name}, config.token,{
		            expiresIn: 1000
		        });
                
                res.send({
                    'state': true,
                    'message':'验证成功',
                    'address': '/',
                    'token':token
                }); //发送首页地址(ajax提交时使用)
                return false;
            }
            	
        }
        res.send({
            'state': false,
            'message':'验证失败',
            'address': '/user/loginregist/loginGet'
        }); //发送首页地址(ajax提交时使用)
    });
});

module.exports = router;