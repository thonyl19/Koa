### Note
    (官網)[https://koajs.com/]
	這個目錄基本上就是學習用的集合,而真正實際會展開來的應用,
		則再另行從頭安裝,讓內容可以相對乾淨點


### 起手式

安装 `koa`
```
npm i koa -D
```
### Config 範例
執行方式 
```
    .\config$ run {example.js}
```
#### 基本用例 
    (base_server.js)[./config/base_server.js]

### Cascading
    (base_server.js)[./config/ex_Cascading.js]

### RESTful API 
    Ref
    [koa2实现restful api](https://juejin.im/post/5b1c870e5188257d8f0f22a6)
    需要搭配 
        \router\index.js
        \controllers\users\UserController.js

### app.listen（...）

### 錯誤處理
```
app.on('error', err => {
  log.error('server error', err)
});
```