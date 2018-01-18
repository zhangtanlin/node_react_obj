//引入登陆注册model
var m_loginregist = require('../models/m_loginregist');

//引入jsonwebtoken
var jwt = require('jsonwebtoken');

var c_loginregist = {

    //请求页面调用(req.method==GET)
    loginGet: function(req, res, next) {
        res.render('login', {
            title: "登陆"
        });
    },

    //登录提交调用
    loginPost: function(req, res, next) {
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
                
                if(resData[i].user_name == params.user_name && resData[i].user_password == params.user_password && resData[i].user_phone == params.user_phone) {
                    //创建token
                    var token = jwt.sign(resData[i], 'app.get(superSecret)', {
                        'expiresInMinutes': 1440 // 设置过期时间
                    });
                    
                    res.send({
                        'state': true,
                        'address': '/',
                        'token':token
                    }); //发送首页地址(ajax提交时使用)
                    return false;
                }
            }
            res.send({
                'state': false,
                'address': ''
            }); //发送首页地址(ajax提交时使用)
        });
    },

    //注册页面调用
    registGet: function(req, res, next) {
        res.render('regist', {
            title: '注册'
        })
    },

    //用户注册提交
    registPost: function(req, res, next) {
        var params = req.body;
        m_loginregist.create(params, function(err, resData) {
            if(err) return next(err);
            res.send({
                'state': true,
                'address': '/admin/loginregist/loginGet'
            });
        });
    },

    //用户退出方法
    logoutGet: function(req, res, next) {
        req.session.sign = false; //设置session的sign值
        req.session.name = ''; //设置session的name值
        res.render('login', {
            title: '登录'
        });
    }

}

module.exports = c_loginregist;