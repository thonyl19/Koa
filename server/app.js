const koa = require('koa2');
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');
const apiRouter = require('./router');
const path = require("path");
const views = require('koa-views');

const app = new koa();


app.use(views(path.join(__dirname, './views'), {
    extension: 'ejs'
}))

app.use(bodyParser());
app.use(apiRouter.routes());

app.listen(3000);
 