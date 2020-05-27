
// const Koa = require('koa');
// let app = new Koa();
// app.use(ctx => {
//   ctx.body = 'hello node!'
// });
// app.listen(3000, () => {
//   console.log('服务器启动 http://127.0.0.1:3000');
// });
 
const koa = require('koa2');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const apiRouter = require('./router');

const app = new koa();

// 首页
const index = router.get('/', ctx => {
    ctx.response.body = 'hello world';
}).routes();

app.use(index);
app.use(bodyParser());
app.use(apiRouter.routes());

app.listen(3000);
 