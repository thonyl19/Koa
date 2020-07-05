const Koa = require('koa');
const app = new Koa();

//基本的頁面回應方式 
app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);