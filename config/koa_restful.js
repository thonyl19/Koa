const koa = require('koa');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const apiRouter = require('../router');

const app = new koa();

// 首頁
const index = router.get('/', ctx => {
    ctx.response.body = 'hello world';
}).routes();

//api 註冊的基本 方法  
apiRouter.get('/api/user/:sid',(ctx, next)=>{
    let {sid} = ctx.params;
    ctx.body = {
        s:"get" ,sid
    };
})

app.use(index);
app.use(bodyParser());
app.use(apiRouter.routes());

app.listen(3000);
 