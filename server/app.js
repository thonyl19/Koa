const koa = require('koa2');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const apiRouter = require('./router');
const path = require("path");
const views = require('koa-views')

const app = new koa();

// 首页
const index = router.get('/', ctx => {
    ctx.response.body = 'hello world';
}).routes();

app.use(views(path.join(__dirname, './views'), {
    extension: 'ejs'
}))

app.use(index);
app.use(bodyParser());
app.use(apiRouter.routes());

app.listen(3000);
 