module.exports = {
    get:{
        async '/page'(ctx, next){
            // ctx.body = "user";
            const title = 'hello koa2'
            await ctx.render('index', {
                title,
            })
        },
        // 用户登录
        async '/login'(ctx, next) {
            // 获取请求提交的数据
            let name = ctx.request.body.name || '',
                pwd = ctx.request.body.pwd || '';
            console.log(name, pwd);
            
            // do something
    
            ctx.body = {
                status: true,
                token: '123'
            }
        },
        
        // 用户信息
        async '/userinfo'(ctx, next) {
            // do something
    
            // 假设这是请求回来的数据
            let data = {
                name: 'jk',
                age: 25
            }
            ctx.body = {
                status: true,
                data
            };
        }
    }
    
}

 