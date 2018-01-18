module.exports = function(app) {
    //登录注册调用控制器
    var c_loginregist = require('../controllers/c_loginregist');
    app.get('/user/loginregist/loginGet', c_loginregist.loginGet);      //登录页面请求地址
    app.post('/user/loginregist/loginPost', c_loginregist.loginPost);   //用户登录提交地址
    app.get('/user/loginregist/registGet', c_loginregist.registGet);    //注册页面请求地址
    app.post('/user/loginregist/registPost', c_loginregist.registPost); //注册页面提交地址
    app.get('/user/loginregist/logoutGet', c_loginregist.logoutGet);    //退出账号提交地址


}