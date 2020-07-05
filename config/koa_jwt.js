/*
實作套用 jwt 機制,使用 koa-jwt  jsonwebtoken
*/
const koa = require('koa');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const apiRouter = require('../router'),
		auth = require('../controllers/Auth');
		jwt = require('koa-jwt');
		

const app = new koa();

// 首页
const index = router.get('/index', ctx => {
    ctx.response.body = 'hello world';
}).routes();

app.use(index);
app.use(bodyParser());


//api 註冊的基本 方法  
apiRouter.get('/api/user/:sid',(ctx, next)=>{
    let {sid} = ctx.params;
    ctx.body = {
        s:"get" ,sid
    };
})

//使用引入 modeul 方式,串接 API 
apiRouter.post('/auth/login',auth["/login"])

//導入 jwt 檢核,
app.use(
    jwt({
        secret:  'demo'
    }).unless({
		// 例外排除,只有以下的 API 不用檢查,其他都要檢核過才可以
        path: [/^\/auth\/login/]
    })
);
app.use(apiRouter.routes());

app.listen(3000);
 