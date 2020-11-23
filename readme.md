### Note
    (官網)[https://koajs.com/]
	這個目錄基本上就是學習用的集合,而真正實際會展開來的應用,
		則再另行從頭安裝,讓內容可以相對乾淨點


### 起手式

安装 `koa`
```
npm i koa koa-router koa-bodyparser
```
### Config 範例
執行方式 
```
    .\config$ node {example.js}
```
#### 基本用例 
    (base_server.js)[./config/base_server.js]

### Cascading
    (ex_Cascading.js)[./config/ex_Cascading.js]

### RESTful API 
    (koa_restful.js)[./config/koa_restful.js]
    Ref
    [koa2实现restful api](https://juejin.im/post/5b1c870e5188257d8f0f22a6)
    需要搭配 
        \router\index.js
        \controllers\users\UserController.js

### RESTful API + jwt
    (koa_jwt.js)[./config/koa_jwt.js]
    Ref
    [koa+jwt实现token验证与刷新](https://segmentfault.com/a/1190000019338195)
    需要搭配
        \controllers\Auth.js  
    範例重點:
        1.jwt 的實現方式
        2.jwt 檢控和例外放行方法
        
### app.listen（...）

### 錯誤處理
```
app.on('error', err => {
  log.error('server error', err)
});
```