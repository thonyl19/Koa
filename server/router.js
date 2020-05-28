const router = require('koa-router')();
const userctrl = require('./controllers/users/UserController');

router
    .post('/api/user/login', userctrl.login)
    .get('/api/user/userinfo', userctrl.userInfo)
    .get('/user', userctrl.page)
    ;
//  .put('xxx')
//  .delete('xxx')

module.exports = router;
 